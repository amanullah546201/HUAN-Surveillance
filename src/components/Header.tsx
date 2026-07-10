import React, { useState } from 'react';
import { Menu, X, Cpu, Phone, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import HuanLogo from './HuanLogo';

interface HeaderProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services & Solutions' },
    { id: 'storyboard', label: 'CCTV AI Storyboard' },
    { id: 'about', label: 'About HUAN' },
    { id: 'contact', label: 'B2B Consultation' },
  ];

  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="huan-header" className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo and Brand */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="flex cursor-pointer items-center space-x-3 transition-opacity hover:opacity-90"
        >
          <HuanLogo variant="brand" size="md" iconOnly={true} />
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-sans text-xl font-extrabold tracking-wider text-white">HUAN</span>
              <span className="rounded bg-blue-950 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-blue-400 border border-blue-850">PAKISTAN</span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">SURVEILLANCE</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id as PageId)}
              className={`relative font-sans text-sm font-medium tracking-wide transition-colors duration-200 py-2 ${
                currentPage === item.id
                  ? 'text-blue-400'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {item.label}
              {currentPage === item.id && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-blue-500 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button & Phone */}
        <div className="hidden lg:flex items-center space-x-6">
          <a 
            href="tel:+923443733996" 
            className="flex items-center space-x-2 font-mono text-sm font-semibold text-slate-300 hover:text-blue-400 transition-colors"
          >
            <Phone className="h-4 w-4 text-blue-500" />
            <span>+92 344 3733996</span>
          </a>
          <button
            onClick={() => handleNavClick('storyboard')}
            className="group flex items-center space-x-2 rounded-lg bg-blue-600 px-4 py-2.5 font-sans text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20"
          >
            <Cpu className="h-4 w-4 transition-transform group-hover:rotate-12" />
            <span>Try AI Storyboard</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-slate-900 hover:text-white focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 block" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6 block" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-lg">
          <div className="space-y-1 px-4 py-4 sm:px-6">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id as PageId)}
                className={`block w-full text-left rounded-md px-4 py-3 font-sans text-base font-semibold tracking-wide transition-all ${
                  currentPage === item.id
                    ? 'bg-blue-600/10 text-blue-400 border-l-2 border-blue-500 pl-3'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-850 mt-4 flex flex-col space-y-4">
              <a 
                href="tel:+923443733996" 
                className="flex items-center space-x-3 px-4 font-mono text-sm font-semibold text-slate-300"
              >
                <Phone className="h-4 w-4 text-blue-500" />
                <span>+92 344 3733996</span>
              </a>
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full flex items-center justify-center space-x-2 rounded-lg bg-blue-600 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-white transition-all"
              >
                <span>Request B2B Quote</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
