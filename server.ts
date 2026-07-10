import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

// Set body size limits for custom style reference uploads (base64)
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Initialize GoogleGenAI client lazily to avoid startup crashes if key is missing
let aiClient: GoogleGenAI | null = null;

function getAI(): GoogleGenAI {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      console.warn("⚠️ GEMINI_API_KEY environment variable is not defined. The app will run in Demo/Simulation Mode.");
      // We will throw a descriptive error when used, rather than crashing on startup
      throw new Error("GEMINI_API_KEY is missing. Please add your key in the AI Studio Secrets panel.");
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Check API key status endpoint
app.get("/api/config", (req, res) => {
  res.json({
    hasApiKey: !!process.env.GEMINI_API_KEY,
    demoMode: !process.env.GEMINI_API_KEY,
  });
});

// Endpoint 1: Parse User Scenario Script into Storyboard Structure
app.post("/api/parse-script", async (req, res) => {
  const { scriptText, numFrames = 4, styleName = "Commercial CCTV", styleDescription = "" } = req.body;

  if (!scriptText) {
    return res.status(400).json({ error: "No script text provided" });
  }

  try {
    const ai = getAI();

    const systemInstruction = `You are a Lead Surveillance Architect and Senior Storyboard Director for HUAN Surveillance, the premium security provider in Pakistan (covering Karachi and nationwide). 
Your task is to analyze the security script, floor-plan description, or incident scenario, and break it down into exactly ${numFrames} logical CCTV camera views in a sequential timeline. 
These views will be used as a storyboard to demonstrate how HUAN's premium CCTV & Biometrics setups secure industrial, textile, or B2B commercial facilities.

For each frame, generate:
- A title capturing the location (e.g. "Textile Mill - Main Loading Dock Gate 3")
- Detailed visual scene description (what happens in this camera feed, including staff, lighting, actions, and security compliance)
- Camera Type (e.g., 4K PTZ Bullet Camera, Wide-Angle Dome Camera, Thermal Operative Camera, Biometric Entry Camera)
- Angle (e.g., Elevated Corner View, Wide fisheye overhead, Medium eye-level, High-angle perimeter scan)
- Simulated Timestamp relative to a chronological sequence (e.g. "2026-07-10 14:45:01", adding increments of seconds/minutes)
- An 'imagePrompt' which is a highly detailed, photorealistic prompt for generating this frame image. Specify composition, style matching '${styleName}', camera artefacts (timestamp overlay, slight scanline, high dynamic range, crisp lens), and precise lighting description based on: '${styleDescription}'.

Also provide a brief overall 'analysis' and custom 'architectureRecommendation' representing HUAN's specialized engineering approach.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `Analyze the following scenario and construct the storyboard structure:\n\nScenario/Script: "${scriptText}"\n\nTarget Camera Style: ${styleName}\nStyle Guidance: ${styleDescription}`,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            analysis: { 
              type: Type.STRING, 
              description: "Overall security assessment of the scenario, highlighting vulnerabilities and coverage analysis."
            },
            architectureRecommendation: { 
              type: Type.STRING, 
              description: "HUAN Surveillance hardware/architecture recommendations tailored to this scenario (e.g. specialized Hikvision or Dahua setups, biometric locks, fiber networks)." 
            },
            frames: {
              type: Type.ARRAY,
              description: `A sequence of exactly ${numFrames} storyboard frames.`,
              items: {
                type: Type.OBJECT,
                properties: {
                  frameId: { type: Type.INTEGER },
                  title: { type: Type.STRING },
                  description: { type: Type.STRING },
                  cameraType: { type: Type.STRING },
                  angle: { type: Type.STRING },
                  timestamp: { type: Type.STRING },
                  imagePrompt: { type: Type.STRING, description: "Detailed visual prompt for generating the high-quality surveillance style storyboard image. Avoid meta words; focus purely on the visual content of the frame." }
                },
                required: ["frameId", "title", "description", "cameraType", "angle", "timestamp", "imagePrompt"]
              }
            }
          },
          required: ["analysis", "architectureRecommendation", "frames"]
        }
      }
    });

    const resultText = response.text;
    if (!resultText) {
      throw new Error("Empty response received from Gemini.");
    }

    const parsed = JSON.parse(resultText);
    res.json(parsed);

  } catch (error: any) {
    console.error("Error parsing script:", error);
    
    // Graceful fallback for Demo/Simulation Mode if API key is missing or there is an API error
    console.log("Using local fallback simulation due to error or missing key");
    const mockResponse = {
      analysis: "HUAN Surveillance Security Analysis: The user script details a high-traffic entry/exit protocol or operational process. Vulnerabilities include blind spots at standard height angles and a lack of real-time multi-point verification.",
      architectureRecommendation: "HUAN B2B Recommendation: Implement 4K High-Definition Varifocal Bullet Cameras (Hikvision ColorVu Series) for exterior perimeters and Biometric Access Hubs with face verification (Hik-Connect Integrated) at high-risk restricted entrances.",
      frames: Array.from({ length: numFrames }).map((_, i) => {
        const timestamps = ["14:42:00", "14:42:15", "14:43:05", "14:45:00"];
        const stepNum = i + 1;
        return {
          frameId: stepNum,
          title: `HUAN Camera ${stepNum} - Primary B2B Surveillance Zone`,
          description: `Detailed simulated CCTV log frame ${stepNum}: Operational activity logged. Staff in specialized gear and machinery visible. Standard security protocol active, under 24/7 active surveillance monitor.`,
          cameraType: i === 2 ? "Biometric Door Terminal" : "4K Ultra-HD Dome Camera",
          angle: i === 1 ? "Elevated Wide-Angle View" : "High-Angle Corner Scan",
          timestamp: `2026-07-10 ${timestamps[i] || "14:45:00"}`,
          imagePrompt: `Security Camera Feed: Industrial factory floor surveillance view, modern textile machines, employees wearing hard hats, clean floor, highly detailed B2B surveillance style camera capture.`
        };
      })
    };
    res.json(mockResponse);
  }
});

// Endpoint 2: Generate Storyboard Image Frame (with optional Style Reference Images)
app.post("/api/generate-frame-image", async (req, res) => {
  const { imagePrompt, aspectRatio = "16:9", imageSize = "1K", customStyleReferences = [] } = req.body;

  if (!imagePrompt) {
    return res.status(400).json({ error: "No imagePrompt provided" });
  }

  try {
    const ai = getAI();

    // Construct the input contents, including custom style references if uploaded by user
    const parts: any[] = [];

    // Add any base64 style reference images uploaded by the user to direct the artistic model style
    if (customStyleReferences && customStyleReferences.length > 0) {
      // Use the first 2 style reference images to avoid payload size overhead
      const maxRefs = customStyleReferences.slice(0, 2);
      for (const base64Data of maxRefs) {
        // Handle common data URI format: "data:image/png;base64,..."
        const match = base64Data.match(/^data:([^;]+);base64,(.+)$/);
        if (match) {
          parts.push({
            inlineData: {
              mimeType: match[1],
              data: match[2]
            }
          });
        } else {
          parts.push({
            inlineData: {
              mimeType: "image/png",
              data: base64Data
            }
          });
        }
      }
    }

    // Refined prompt emphasizing corporate security look and style coherence
    const visualPrompt = `4K CCTV Security Surveillance Storyboard Feed: ${imagePrompt}. Highly professional, sharp lens, clear contrast, authentic camera overlays in corners (timestamp, camera tag CAM-0${Math.floor(Math.random() * 9) + 1}). Zero artistic styling, photorealistic corporate B2B surveillance capture.`;
    parts.push({ text: visualPrompt });

    // Determine the appropriate aspect ratio format
    const aspect = aspectRatio || "16:9";
    const size = imageSize || "1K";

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-image",
      contents: { parts },
      config: {
        imageConfig: {
          aspectRatio: aspect as any,
          imageSize: size as any,
        }
      }
    });

    // Locate the image part in the response
    let base64Image = "";
    if (response.candidates?.[0]?.content?.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          base64Image = `data:${part.inlineData.mimeType || "image/png"};base64,${part.inlineData.data}`;
          break;
        }
      }
    }

    if (!base64Image) {
      throw new Error("No image was returned from Gemini image model.");
    }

    res.json({ image: base64Image });

  } catch (error: any) {
    console.error("Error generating frame image:", error);

    // Fallback to beautiful Unsplash security images or Picsum seeds
    const seedNum = Math.floor(Math.random() * 1000);
    const mockImages = [
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800", // CCTV Dome camera closeup
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800", // Tech command center
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800", // Network server cables
      "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=800", // Secure corridor door
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800", // Secure server terminal screen
    ];
    
    // Choose one based on current random or fallback path
    const fallbackImage = mockImages[seedNum % mockImages.length];
    console.log(`Using mock fallback image: ${fallbackImage}`);
    res.json({ image: fallbackImage });
  }
});

// Endpoint 3: B2B Quote Lead Submission
app.post("/api/quote-request", (req, res) => {
  const { companyName, contactPerson, phoneNumber, email, facilityType, message } = req.body;
  
  if (!companyName || !contactPerson || !phoneNumber || !email) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Simulate storing or sending email notification
  console.log("📩 RECEIVED NEW B2B HUAN SURVEILLANCE QUOTE REQUEST:", {
    companyName,
    contactPerson,
    phoneNumber,
    email,
    facilityType,
    message,
    timestamp: new Date().toISOString()
  });

  res.json({
    success: true,
    message: "Thank you! Your corporate security inquiry has been received. Our Pakistan engineering team will contact you within 2 business hours for a free site assessment.",
    referenceNo: `HUAN-2026-${Math.floor(100000 + Math.random() * 900000)}`
  });
});

// Start Node server & attach Vite middleware
async function startServer() {
  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🟢 HUAN Surveillance server running on http://localhost:${PORT}`);
  });
}

startServer();
