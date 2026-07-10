import React from 'react';
import { Shield, Eye, Cpu, Users, Layers, CheckCircle2, ChevronRight, HardHat, Server, Building, PhoneCall } from 'lucide-react';
import { PageId } from '../types';

interface HomeViewProps {
  setCurrentPage: (page: PageId) => void;
}

export default function HomeView({ setCurrentPage }: HomeViewProps) {
  const values = [
    {
      title: "24/7 Operational Uptime",
      desc: "Robust physical and network systems optimized for zero-downtime B2B performance, ensuring perpetual safety.",
      icon: <Eye className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Certified B2B Field Engineers",
      desc: "Comprehensive layout designs, site surveys, structural neatness, and professional installations.",
      icon: <HardHat className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Customized System Blueprints",
      desc: "Bespoke camera configurations, server clusters, biometric parameters, and low-voltage cabling diagrams.",
      icon: <Layers className="h-6 w-6 text-blue-500" />
    },
    {
      title: "Pakistan-Wide B2B SLA Support",
      desc: "Dedicated SLA support with guaranteed response times in Karachi and all corporate hubs across the country.",
      icon: <Cpu className="h-6 w-6 text-blue-500" />
    }
  ];

  const coreSolutions = [
    {
      title: "Commercial CCTV & Smart Surveillance",
      desc: "Ultra-HD dome and bullet cameras with Hik-Connect cloud integration, smart remote-monitoring, and active perimeter defenses.",
      img: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800",
      features: ["Active intruder analytics", "Mobile & desktop feed access", "24/7 low-light color capture"]
    },
    {
      title: "Industrial & Textile Sector Solutions",
      desc: "Specialized, heavy-duty surveillance layouts built for complex industrial yards, high-lint textile production mills, and secure depots.",
      img: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=800",
      features: ["Thermal hazard sensors", "Wide-field production monitors", "Explosion-proof casings"]
    },
    {
      title: "Access Control & Biometrics Integration",
      desc: "Precision card terminals, fingerprint verifiers, and modern facial recognition systems for office perimeters and high-security zones.",
      img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
      features: ["Instant attendance logging", "Integrates with HR payroll engines", "Door solenoid lock controls"]
    }
  ];

  return (
    <div id="huan-home-view" className="bg-slate-950 text-white font-sans overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-slate-950 py-20 px-4 sm:px-6 lg:px-8">
        {/* Ambient glow backgrounds */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/15 via-slate-950 to-slate-950 pointer-events-none" />
        <div className="absolute right-0 top-1/4 h-[350px] w-[350px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute left-10 bottom-10 h-[250px] w-[250px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="inline-flex items-center space-x-2 rounded-full border border-blue-500/30 bg-blue-950/40 px-3.5 py-1 text-xs text-blue-400 font-mono tracking-wider">
              <Shield className="h-3.5 w-3.5" />
              <span>TRUSTED BY PAKISTAN'S MILITARY & INDUSTRIAL SECTORS</span>
            </div>
            
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Enterprise-Grade <span className="text-blue-500">Security Systems</span> for Pakistan's Leading Industries
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
              HUAN Surveillance delivers state-of-the-art CCTV grids, biometric access hardware, and certified low-voltage network cabling. Uncompromised reliability, designed specifically for textile mills, factories, and commercial headquarters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setCurrentPage('contact')}
                className="rounded-lg bg-blue-600 hover:bg-blue-500 px-6 py-4 font-sans text-xs uppercase font-bold tracking-widest text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/30 flex items-center justify-center space-x-3"
              >
                <span>Request a Corporate Quote</span>
                <ChevronRight className="h-4 w-4" />
              </button>
              
              <button
                onClick={() => setCurrentPage('storyboard')}
                className="rounded-lg border border-slate-800 bg-slate-900/60 hover:bg-slate-900/100 hover:border-slate-700 px-6 py-4 font-sans text-xs uppercase font-bold tracking-widest text-slate-300 transition-all flex items-center justify-center space-x-3"
              >
                <span>Launch CCTV AI Planner</span>
                <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
              </button>
            </div>

            {/* Quick trust metric badges */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-900 max-w-lg font-mono">
              <div>
                <span className="block text-2xl font-bold text-white">90+</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 mt-1 block">Completed Projects</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-blue-500">3+ Years</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 mt-1 block">Industry Caliber</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-white">Karachi</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 mt-1 block">Headquarters</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Element (Professional CCTV Sunset backdrop) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl border border-slate-800 bg-slate-950 p-3 shadow-2xl overflow-hidden group">
              <div className="absolute top-4 left-4 z-10 rounded-md bg-red-600/90 px-2 py-1 font-mono text-[9px] font-bold tracking-widest text-white uppercase flex items-center space-x-1.5 animate-pulse">
                <span className="h-1.5 w-1.5 rounded-full bg-white inline-block"></span>
                <span>REC LIVE</span>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=600" 
                alt="HUAN Surveillance Camera Feed Mock" 
                className="rounded-xl w-full object-cover aspect-[4/3] grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-slate-400 px-1">
                <span>CAM_PERIMETER_WEST_02</span>
                <span>2026-07-10 14:45:11 UTC</span>
              </div>
            </div>
            
            {/* Float badge */}
            <div className="absolute -bottom-6 -left-6 rounded-xl border border-slate-800 bg-slate-950/95 backdrop-blur-md p-4 flex items-center space-x-4 shadow-xl">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-400 border border-green-500/20">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-white">Military Compliant</h4>
                <p className="text-[10px] text-slate-400">Serving Navy complexes in Karachi</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* VALUE PROPOSITION SECTION */}
      <section className="bg-slate-950 py-24 border-t border-slate-900 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-16">
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-blue-500">Uncompromised SLA Frameworks</h2>
            <h3 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Securing Pakistan's Industrial Backbone
            </h3>
            <p className="text-xs text-slate-400">
              Unlike consumer-grade setups, HUAN Surveillance designs and deploys high-volume infrastructure optimized for the continuous operational realities of massive textile plants, manufacturing zones, and logistics hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div 
                key={i} 
                className="relative flex flex-col items-start p-6 rounded-2xl border border-slate-900 bg-slate-950/60 hover:bg-slate-900/30 hover:border-slate-800 transition-all duration-300 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-950/50 border border-blue-900/30 mb-5 group-hover:scale-110 transition-transform">
                  {v.icon}
                </div>
                <h4 className="text-white font-sans text-sm font-semibold tracking-wide mb-2">
                  {v.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed text-left">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURED SOLUTIONS SECTION */}
      <section className="bg-slate-950 py-24 border-t border-slate-900 relative">
        <div className="absolute left-0 bottom-0 h-[300px] w-[300px] bg-blue-900/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-16">
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-blue-500">Core Systems</h2>
            <h3 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              State-of-the-Art Surveillance Solutions
            </h3>
            <p className="text-xs text-slate-400">
              Tailored CCTV architectures, Biometric controls, and structural blueprints engineered to defend multi-floor corporate hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coreSolutions.map((sol, index) => (
              <div 
                key={index}
                className="rounded-2xl border border-slate-900 bg-slate-950/80 overflow-hidden flex flex-col shadow-xl hover:border-slate-800 transition-all duration-300 group"
              >
                {/* Visual Thumbnail */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img 
                    src={sol.img} 
                    alt={sol.title} 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                </div>

                {/* Info and features */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3 text-left">
                    <h4 className="text-white font-sans text-base font-semibold leading-snug">
                      {sol.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>

                  <div className="space-y-4 border-t border-slate-900 pt-5 text-left">
                    <ul className="space-y-2">
                      {sol.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center space-x-2 text-xs text-slate-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button
                      onClick={() => setCurrentPage('services')}
                      className="inline-flex items-center space-x-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-blue-400 hover:text-blue-300 group/btn mt-1"
                    >
                      <span>Explore Configuration Specs</span>
                      <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Interactive CTA Grid Banner */}
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-blue-950/40 to-slate-950/80 p-8 sm:p-12 text-left relative overflow-hidden mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="absolute right-0 top-0 h-full w-[30%] bg-blue-600/5 blur-[50px] pointer-events-none" />
            
            <div className="md:col-span-8 space-y-4">
              <span className="rounded-full bg-blue-900/30 text-blue-400 border border-blue-800 px-3 py-1 text-[10px] font-mono tracking-widest uppercase">
                Free Site Consultation
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-snug">
                Need a certified surveyor to assess your textile plant or commercial warehouse?
              </h3>
              <p className="text-xs text-slate-300 max-w-xl">
                We design fully tailored blueprint diagrams based on your specific operational constraints. Get detailed, cost-optimized setups utilizing premier brand specifications.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 justify-end w-full">
              <button
                onClick={() => setCurrentPage('contact')}
                className="rounded-lg bg-blue-600 hover:bg-blue-500 px-5 py-3 font-sans text-xs uppercase font-bold tracking-widest text-white transition-all text-center flex items-center justify-center space-x-2"
              >
                <span>Book Site Audit</span>
                <PhoneCall className="h-4 w-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
