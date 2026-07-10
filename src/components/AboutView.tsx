import React from 'react';
import { Shield, Target, Cpu, HardHat, Award, Milestone, Ship, ArrowRight, CheckCircle2 } from 'lucide-react';
import { PageId } from '../types';

interface AboutViewProps {
  setCurrentPage: (page: PageId) => void;
}

export default function AboutView({ setCurrentPage }: AboutViewProps) {
  const coreValues = [
    {
      title: "Integrity",
      desc: "We conduct our business with honesty, transparency, and strict professionalism in every engagement across Pakistan.",
      icon: <Shield className="h-5 w-5 text-blue-500" />
    },
    {
      title: "Reliability",
      desc: "We deliver dependable security solutions that our B2B clients can trust to operate flawlessly when it matters most.",
      icon: <Milestone className="h-5 w-5 text-blue-500" />
    },
    {
      title: "Quality Equipment",
      desc: "We maintain high standards in every project, utilizing premium gear from authorized Hikvision and Dahua supplies.",
      icon: <Award className="h-5 w-5 text-blue-500" />
    },
    {
      title: "Customer Commitment",
      desc: "Our clients' security needs remain at the absolute center of everything we do, ensuring customized, exact deployments.",
      icon: <Target className="h-5 w-5 text-blue-500" />
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Requirement Assessment",
      desc: "Comprehensive structural analysis of the client's explicit security requirements, baseline operational hazards, and long-term strategic safety objectives."
    },
    {
      step: 2,
      title: "Site Survey",
      desc: "Conducting microscopic on-site layout inspections, signal testing, wireless line-of-sight analysis, and critical technical evaluations."
    },
    {
      step: 3,
      title: "Solution Design",
      desc: "Developing comprehensive blueprint layouts, bandwidth allocation mappings, network schematics, and customized system architectures."
    },
    {
      step: 4,
      title: "Installation & Deployment",
      desc: "Professional, clean physical deployment, structured low-voltage cabling, equipment anchoring, and system configuration by senior technicians."
    },
    {
      step: 5,
      title: "Testing & Commissioning",
      desc: "Rigorous multi-point testing, failover analysis, camera angle tuning, dark-environment calibration, and comprehensive system optimization."
    },
    {
      step: 6,
      title: "Ongoing Support",
      desc: "Providing structured routine maintenance, emergency on-site troubleshooting, software firmware upgrades, and immediate technical assistance."
    }
  ];

  const chooseReasons = [
    "Nationwide Service Coverage: Capability to execute unified multi-city enterprise deployments all across Pakistan.",
    "Customized Security Solutions: Zero off-the-shelf generalized packages; every blueprint is made to measure.",
    "Professional Installation Standards: Rigid compliance with structural neatness, weatherproofing, and safety codes.",
    "Reliable Technical Support: Fast-response SLAs designed to keep your surveillance infrastructure live 24/7.",
    "Cost-Effective Implementations: High-tier hardware optimization providing maximal protection for your capital allocation.",
    "Proven Cross-Sector Domain Expertise: Verified experience serving complex educational campuses, continuous factories, and corporate headquarters."
  ];

  return (
    <div id="huan-about-view" className="bg-slate-950 text-white font-sans py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-24">
        
        {/* Top Header Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="rounded-full bg-blue-900/30 text-blue-400 border border-blue-800 px-3 py-1 text-[10px] font-mono tracking-widest uppercase">
              Corporate Mission & Profile
            </span>
            <h1 className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Delivering Robust, Uncompromised Security Frameworks
            </h1>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              HUAN Surveillance is a Pakistan-based security and surveillance solutions provider specializing in the design, supply, installation, and maintenance of advanced security systems. With over three years of industry experience and 90+ successfully completed projects, we help businesses, institutions, industrial facilities, and residential clients enhance safety, monitor critical assets, and maintain operational security through reliable and modern surveillance technologies.
            </p>
            <div className="border-l-4 border-blue-500 pl-4 py-1 italic font-sans text-xs text-slate-400">
              "Empowering Pakistani businesses to operate with absolute peace of mind through localized execution and technical mastery."
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl border border-slate-950 bg-slate-950 p-2 shadow-2xl relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800" 
                alt="HUAN Surveillance Headquarters Monitoring" 
                className="rounded-xl w-full object-cover aspect-[4/3] grayscale-[25%]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="border-t border-slate-900 pt-16 text-center space-y-12">
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-blue-500">Corporate Values</h2>
            <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight">Our Unwavering Commitment</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, idx) => (
              <div key={idx} className="rounded-xl border border-slate-900 bg-slate-950 p-6 text-left space-y-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-950/60 border border-blue-900/30">
                  {val.icon}
                </div>
                <h4 className="text-white font-sans text-sm font-semibold">{val.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CMES Pakistan Navy Experience Showcase */}
        <div className="rounded-2xl border border-slate-900 bg-slate-950 p-8 sm:p-12 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="absolute top-0 right-0 h-full w-[25%] bg-blue-600/5 blur-[50px] pointer-events-none" />
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 rounded bg-blue-900/40 text-blue-300 border border-blue-800 px-3 py-1 text-[10px] font-mono uppercase font-semibold">
              <Ship className="h-3.5 w-3.5 mr-1" />
              <span>Notable Project Spotlight</span>
            </div>
            
            <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white">
              CMES (Pakistan Navy) High-Tier Security Implementation
            </h3>
            
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              Our successful delivery of professional, highly customized security configurations within highly sensitive military defense zones demonstrates our elite engineering capabilities, strict security compliance, and organizational trustworthiness. We executed complex layout designs under extreme surveillance specifications, establishing uncompromised network pipelines that maintain maximum security integrity.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-900">
              <div>
                <span className="block text-white text-lg font-bold">Military SLA</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">Defense Compliant</span>
              </div>
              <div>
                <span className="block text-blue-400 text-lg font-bold">Uncompromised</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">Structural Durability</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-2 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" 
                alt="CMES Defense Port Security" 
                className="rounded-lg object-cover w-full aspect-[16/10] grayscale-[40%]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* 6-Step Work Process Timeline */}
        <div className="border-t border-slate-900 pt-16 text-center space-y-12">
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-blue-500">Methodology</h2>
            <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight">Our Standardized 6-Step Work Process</h3>
            <p className="text-xs text-slate-400">To ensure complete quality alignment and structural reliability, we execute every deployment according to a rigid 6-step engineering methodology.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="rounded-xl border border-slate-900 bg-slate-950/40 p-6 text-left space-y-4 hover:border-slate-800 transition-colors duration-300 relative group">
                <div className="absolute top-4 right-4 font-mono text-4xl font-extrabold text-blue-900/30 group-hover:text-blue-500/20 transition-colors">
                  0{step.step}
                </div>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 font-mono text-xs font-bold text-white shadow shadow-blue-500/20">
                  {step.step}
                </div>
                <h4 className="text-white font-sans text-sm font-semibold pt-1">{step.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us - Bullets list */}
        <div className="border-t border-slate-900 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-4 text-left">
            <h2 className="font-mono text-xs font-bold uppercase tracking-widest text-blue-500">Our Edge</h2>
            <h3 className="font-sans text-2xl sm:text-3xl font-bold tracking-tight">Why Choose HUAN Surveillance?</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              With years of active commercial experience and a track record of high-profile deployments, we provide uncompromised technical proficiency. Our field managers oversee installations to ensure that structural neatness, weatherproofing, and electrical standards are strictly maintained.
            </p>
            <div className="pt-4">
              <button 
                onClick={() => setCurrentPage('contact')} 
                className="inline-flex items-center space-x-2 rounded-lg bg-blue-600 hover:bg-blue-500 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md shadow-blue-500/10"
              >
                <span>Request B2B Quote</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-4 text-left flex flex-col justify-center">
            {chooseReasons.map((reason, index) => (
              <div key={index} className="flex items-start space-x-3 rounded-lg border border-slate-900/40 bg-slate-950/20 p-3">
                <CheckCircle2 className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 leading-relaxed font-sans">{reason}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
