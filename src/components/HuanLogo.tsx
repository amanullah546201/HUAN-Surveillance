import React from 'react';

interface HuanLogoProps {
  className?: string;
  iconOnly?: boolean;
  variant?: 'light' | 'dark' | 'brand';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function HuanLogo({ 
  className = '', 
  iconOnly = false, 
  variant = 'brand',
  size = 'md'
}: HuanLogoProps) {
  
  // Choose colors based on variant
  // Logo brand deep navy color is #002D54.
  const logoFill = variant === 'light' ? '#FFFFFF' : '#002D54';
  const cameraStroke = variant === 'light' ? '#002D54' : '#FFFFFF';
  const cameraDotFill = variant === 'light' ? '#002D54' : '#FFFFFF';
  
  // Set dimensions based on size
  const dims = {
    sm: { icon: 'h-8 w-8', textTitle: 'text-base', textSubtitle: 'text-[7px]' },
    md: { icon: 'h-11 w-11', textTitle: 'text-xl', textSubtitle: 'text-[9px]' },
    lg: { icon: 'h-16 w-16', textTitle: 'text-3xl', textSubtitle: 'text-[11px]' },
    xl: { icon: 'h-24 w-24', textTitle: 'text-4xl', textSubtitle: 'text-[14px]' }
  }[size];

  // Text colors based on background
  const textTitleColor = variant === 'brand' || variant === 'dark' ? 'text-white' : 'text-blue-600';
  const textSubtitleColor = variant === 'brand' || variant === 'dark' ? 'text-slate-300' : 'text-slate-500';
  const textTitleStyle = variant === 'brand' ? {} : (variant === 'light' ? {} : { color: '#002D54' });
  const textSubtitleStyle = variant === 'brand' ? {} : (variant === 'light' ? {} : { color: '#002D54', opacity: 0.8 });

  return (
    <div id="huan-logo" className={`flex items-center gap-3 select-none ${className}`}>
      
      {/* Precision Vector SVG of the HUAN Surveillance Logo Shield */}
      <svg 
        viewBox="0 0 500 500" 
        className={`${dims.icon} shrink-0 transition-transform hover:scale-105 duration-300`} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Rounded Shield Outer Path */}
        <path 
          d="M 250,90 
             C 310,100 375,125 405,155 
             C 425,230 405,340 250,430 
             C 95,340 75,230 95,155 
             C 125,125 190,100 250,90 Z" 
          fill={logoFill} 
          stroke={variant === 'light' ? '#002D54' : 'rgba(255, 255, 255, 0.15)'}
          strokeWidth="10"
        />

        {/* CCTV Camera Head & Lens White Outline (Image Drawing) */}
        {/* Outer visor curve */}
        <path 
          d="M 145,245 
             C 145,185 225,178 285,178 
             C 345,178 375,198 375,225 
             C 375,250 350,265 330,245" 
          stroke={cameraStroke} 
          strokeWidth="24" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none"
        />

        {/* Inner visor wrapping line */}
        <path 
          d="M 155,245 
             C 165,210 220,210 270,212 
             C 310,214 340,230 340,245" 
          stroke={cameraStroke} 
          strokeWidth="18" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none"
        />

        {/* Concentric Circle Lens / Camera Eye */}
        <circle 
          cx="285" 
          cy="245" 
          r="42" 
          stroke={cameraStroke} 
          strokeWidth="24" 
          fill="none" 
        />
        <circle 
          cx="285" 
          cy="245" 
          r="14" 
          fill={cameraDotFill} 
        />

        {/* Outer body curve that forms the lower frame of the camera */}
        <path 
          d="M 145,245 
             C 155,285 200,310 265,310 
             C 325,310 345,288 345,250" 
          stroke={cameraStroke} 
          strokeWidth="20" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none"
        />

        {/* Neck / Mounting bracket that curves down, left and turns right */}
        <path 
          d="M 195,295 
             C 195,345 160,355 220,385" 
          stroke={cameraStroke} 
          strokeWidth="22" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none"
        />
        
        {/* Double reinforcement bracket shadow line */}
        <path 
          d="M 215,310 
             C 215,350 185,360 235,380" 
          stroke={cameraStroke} 
          strokeWidth="12" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none"
        />
      </svg>

      {/* Brand Text Columns matching the logo layout */}
      {!iconOnly && (
        <div className="flex flex-col text-left leading-none">
          <span 
            className={`font-sans font-black tracking-wider uppercase leading-none select-none ${dims.textTitle} ${textTitleColor}`}
            style={textTitleStyle}
          >
            HUAN
          </span>
          <span 
            className={`font-sans font-extrabold tracking-[0.25em] uppercase leading-none mt-1 select-none ${dims.textSubtitle} ${textSubtitleColor}`}
            style={textSubtitleStyle}
          >
            SURVEILLANCE
          </span>
        </div>
      )}
    </div>
  );
}
