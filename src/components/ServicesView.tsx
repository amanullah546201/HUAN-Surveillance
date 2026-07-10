import React from 'react';
import { Eye, Shield, HardHat, Layers, Server, ShieldCheck, CheckCircle2, ChevronRight, Activity, Cpu } from 'lucide-react';
import { PageId } from '../types';

interface ServicesViewProps {
  setCurrentPage: (page: PageId) => void;
}

export default function ServicesView({ setCurrentPage }: ServicesViewProps) {
  const services = [
    {
      id: "cctv",
      title: "Commercial CCTV & Smart Surveillance",
      subtitle: "High-definition camera setups, remote monitoring, and active perimeter defense.",
      img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1000",
      description: "HUAN Surveillance provides high-tier IP camera grids and coaxial solutions featuring top brand integrations (Hikvision, Dahua). With smart remote-monitoring powered by Hik-Connect and Dahua DSS platforms, business owners can view feeds in real-time from anywhere worldwide. Security grids are equipped with smart analytics, perimeter intrusion alarms, and low-light ColorVu tech.",
      specs: [
        "Hikvision ColorVu & AcuSense AI integrations",
        "Encrypted mobile & web streaming streams via Hik-Connect",
        "Perimeter line-crossing detection with automated flashers",
        "Local NVR backup clusters with centralized RAID redundancy",
        "Smart infrared night-vision up to 80-meter perimeters"
      ],
      icon: <Eye className="h-6 w-6 text-blue-500" />
    },
    {
      id: "industrial",
      title: "Industrial & Textile Sector Solutions",
      subtitle: "Specialized operational monitors for high-lint mills, factories, and warehouses.",
      img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=1000",
      description: "Surveillance inside textile mills, spinning lines, and chemical warehouses demands heavy-duty industrial specifications. High concentrations of dust, extreme heat, and dynamic heavy machinery pose major deployment challenges. Our engineers install specialized explosion-proof, corrosion-resistant housings with high IP ratings (IP67/IP68) that continuous operations depend on.",
      specs: [
        "Heavy dust-lint resistant camera housings",
        "Thermal camera monitors for manufacturing hazard identification",
        "Central monitoring room setups (multipoint TV video walls)",
        "Wide dynamic range (WDR) sensors for high-glare smelting lines",
        "Forklift pathing and automated dispatch sector coverage"
      ],
      icon: <Activity className="h-6 w-6 text-blue-500" />
    },
    {
      id: "biometrics",
      title: "Access Control & Biometrics Integration",
      subtitle: "Secure facial recognition, smart badges, and automated attendance registers.",
      img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000",
      description: "Secure entry-level restrictions and accurate workforce tracking are vital for B2B enterprises. We deploy high-tech biometric hubs, magnetic lock solenoids, and electronic speed gates that integrate with localized company ERP or payroll engines. Manage security access parameters for thousands of employees seamlessly.",
      specs: [
        "Hikvision MinMoe facial recognition kiosks",
        "Precision optical and capacitive fingerprint terminals",
        "Sub-0.2 second recognition latency for rapid staff intake",
        "Automated attendance logs exported into payroll engines",
        "Anti-passback protocols for high-security vault gates"
      ],
      icon: <Cpu className="h-6 w-6 text-blue-500" />
    },
    {
      id: "architecture",
      title: "Custom System Architecture & Site Survey",
      subtitle: "Comprehensive physical surveys and tailored low-voltage diagrams.",
      img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1000",
      description: "At HUAN, we believe in bespoke engineering. We do not sell standardized off-the-shelf bundles. Our field managers survey your site physically, identify core blindspots, structure bandwidth allocation paths, and prepare professional low-voltage schematics to optimize coverage and cost.",
      specs: [
        "Comprehensive site risk and blindspot analysis",
        "Detailed CAD-style fiber & network cabling blueprints",
        "Bandwidth and hard drive storage calculation assessments",
        "UPS and standby backup power layout designs",
        "Scaleable multi-building wireless bridging setups"
      ],
      icon: <Layers className="h-6 w-6 text-blue-500" />
    }
  ];

  return (
    <div id="huan-services-view" className="bg-slate-950 text-white font-sans py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-20">
        
        {/* Header Introduction */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="rounded-full bg-blue-900/30 text-blue-400 border border-blue-800 px-3 py-1 text-[10px] font-mono tracking-widest uppercase">
            B2B Engineering Portfolio
          </span>
          <h1 className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Specialized B2B Security Infrastructure
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            HUAN Surveillance engineers state-of-the-art security networks covering Karachi and nationwide Pakistan. We specify equipment from premier certified global brands to guarantee 24/7 reliability.
          </p>
        </div>

        {/* Detailed Service Cards Breakdown */}
        <div className="space-y-24">
          {services.map((serv, index) => (
            <div 
              key={serv.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              
              {/* Service Info Content */}
              <div className={`lg:col-span-6 space-y-6 text-left ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                <div className="flex items-center space-x-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-950/60 border border-blue-900/30">
                    {serv.icon}
                  </div>
                  <div>
                    <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-white">
                      {serv.title}
                    </h3>
                    <p className="text-xs text-blue-400 font-mono mt-0.5">{serv.subtitle}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {serv.description}
                </p>

                {/* Technical Specs List */}
                <div className="border-t border-slate-900 pt-5">
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider font-mono mb-3">
                    Technical Specifications:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serv.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-start space-x-2 text-xs text-slate-400">
                        <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Service Image Visual */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl border border-slate-800 bg-slate-950 p-2 shadow-2xl overflow-hidden group">
                  {/* Visual timestamp overlay */}
                  <div className="absolute top-4 left-4 z-10 rounded bg-slate-950/80 px-2 py-0.5 font-mono text-[9px] text-slate-400 flex items-center space-x-1 border border-slate-850">
                    <span className="h-1 w-1 bg-blue-500 rounded-full animate-ping"></span>
                    <span>FEED_CAM_MEMBER_SOL_0{index + 1}</span>
                  </div>
                  <img 
                    src={serv.img} 
                    alt={serv.title} 
                    className="rounded-xl w-full object-cover aspect-[16/10] grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Dynamic CTA */}
        <div className="rounded-2xl border border-slate-900 bg-slate-950/40 p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-transparent to-transparent pointer-events-none" />
          <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-white">
            Ready to design custom camera layouts for your workspace?
          </h3>
          <p className="text-xs text-slate-400 max-w-xl mx-auto leading-relaxed">
            Our specialized engineers are ready to map out your facilities in detail. Use our interactive AI Storyboard planner to simulate and describe your security scenario right now!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('storyboard')}
              className="rounded-lg bg-blue-600 hover:bg-blue-500 px-6 py-3 font-sans text-xs uppercase font-bold tracking-widest text-white transition-all duration-300"
            >
              Start AI Storyboard
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="rounded-lg border border-slate-800 bg-slate-900/60 hover:bg-slate-900/100 px-6 py-3 font-sans text-xs uppercase font-bold tracking-widest text-slate-300 transition-all"
            >
              Contact Survey Desk
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
