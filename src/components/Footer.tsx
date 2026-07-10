import React from 'react';
import { Shield, Mail, Phone, MapPin, Globe, ArrowUpRight, MessageSquare } from 'lucide-react';
import { PageId } from '../types';
import HuanLogo from './HuanLogo';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="huan-footer" className="bg-slate-950 border-t border-slate-900 text-slate-400 font-sans">
      
      {/* Top Banner: Immediate Pakistan Coverage Support */}
      <div className="border-b border-slate-900 bg-slate-950/50 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 border border-green-500/30">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500"></span>
              </span>
            </div>
            <div>
              <h4 className="text-white font-sans text-sm font-semibold uppercase tracking-wider">Active B2B Survey Desk</h4>
              <p className="text-xs text-slate-400 mt-0.5">Surveys & immediate deployments across Karachi, Lahore, Faisalabad & all major cities.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://wa.me/923443733996" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2 rounded-lg bg-green-600 hover:bg-green-500 px-5 py-2.5 text-xs font-semibold text-white transition-all shadow-md shadow-green-600/10"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp Engineers</span>
            </a>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="flex items-center space-x-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 px-5 py-2.5 text-xs font-semibold text-white transition-all"
            >
              <span>Instant Site Audit</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-4 space-y-6">
            <div className="flex flex-col space-y-2">
              <HuanLogo variant="brand" size="md" />
              <p className="font-mono text-[9px] text-slate-500 uppercase tracking-widest pl-1">Protecting What Matters Most</p>
            </div>
            <p className="text-xs leading-relaxed text-slate-400 font-sans max-w-sm">
              HUAN Surveillance is Pakistan's premier B2B security and network infrastructure developer. We customize state-of-the-art surveillance grids, biometric attendance integrations, and high-bandwidth fiber systems.
            </p>
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-500 shrink-0" />
                <span>Karachi Head Office & Nationwide Desks, Pakistan</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-500 shrink-0" />
                <a href="tel:+923443733996" className="hover:text-blue-400 transition-colors">+92 344 3733996</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-500 shrink-0" />
                <a href="mailto:huan.surveillance@gmail.com" className="hover:text-blue-400 transition-colors">huan.surveillance@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 sm:col-span-6 md:col-span-3 space-y-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white font-mono border-l-2 border-blue-500 pl-3">Security Solutions</h4>
            <ul className="space-y-3.5 text-xs font-sans">
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors text-left">Commercial CCTV & Smart Cloud</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors text-left">Industrial & Textile Floors Grid</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors text-left">Biometrics & Attendance Hubs</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('services')} className="hover:text-white transition-colors text-left">Custom Architectural Survey</button>
              </li>
              <li>
                <button onClick={() => handleNavClick('storyboard')} className="text-blue-400 hover:text-blue-300 font-semibold transition-colors text-left flex items-center space-x-1">
                  <span>AI Storyboard Simulator</span>
                  <span className="inline-block rounded bg-blue-900/40 text-[9px] px-1 py-0.5 border border-blue-800 text-blue-300 ml-1">New</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Coverage Map Panel */}
          <div className="col-span-1 sm:col-span-6 md:col-span-5 space-y-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white font-mono border-l-2 border-blue-500 pl-3">Pakistan Wide Deployment</h4>
            <div className="rounded-xl border border-slate-900 bg-slate-950/40 p-4 space-y-3">
              <div className="flex items-center justify-between font-mono text-xs text-slate-300">
                <span className="flex items-center space-x-1.5">
                  <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                  <span>Karachi (Core)</span>
                </span>
                <span className="text-slate-500">Immediate Deployment</span>
              </div>
              <div className="flex items-center justify-between font-mono text-xs text-slate-300">
                <span className="flex items-center space-x-1.5">
                  <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                  <span>Sindh Industrial Zones</span>
                </span>
                <span className="text-slate-500">Same-Day Support</span>
              </div>
              <div className="flex items-center justify-between font-mono text-xs text-slate-300">
                <span className="flex items-center space-x-1.5">
                  <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                  <span>Punjab & KPK Zones</span>
                </span>
                <span className="text-slate-500">B2B Scheduled Audit</span>
              </div>
              <div className="border-t border-slate-900 pt-3 flex items-center space-x-2 text-[11px] text-slate-400 font-sans">
                <Globe className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                <span>Working in alliance with CMES (Pakistan Navy) and top-tier industrial complexes.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright and legal */}
        <div className="mt-16 border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono">
          <p>© {currentYear} HUAN Surveillance. All Rights Reserved. Karachi, Pakistan.</p>
          <div className="flex space-x-6 text-slate-500">
            <button className="hover:text-slate-300 transition-colors">Privacy Policy</button>
            <button className="hover:text-slate-300 transition-colors">Terms of Service</button>
            <button className="hover:text-slate-300 transition-colors">B2B SLA Agreement</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
