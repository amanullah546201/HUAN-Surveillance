export interface SurveillanceSolution {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  icon: string;
  features: string[];
  image: string;
}

export interface Sector {
  name: string;
  icon: string;
  description: string;
}

export interface WorkProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export interface StoryboardFrame {
  frameId: number;
  title: string;
  description: string;
  cameraType: string;
  angle: string;
  timestamp: string;
  image?: string; // Base64 or mock SVG
  isGenerating?: boolean;
  imagePrompt: string;
}

export interface StoryboardResult {
  frames: StoryboardFrame[];
  analysis: string;
  architectureRecommendation: string;
}

export interface ContactFormData {
  companyName: string;
  contactPerson: string;
  phoneNumber: string;
  email: string;
  facilityType: string;
  message: string;
}

export type PageId = 'home' | 'services' | 'about' | 'storyboard' | 'contact';
