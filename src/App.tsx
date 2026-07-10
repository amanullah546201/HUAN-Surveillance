import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ServicesView from './components/ServicesView';
import AboutView from './components/AboutView';
import StoryboardView from './components/StoryboardView';
import ContactView from './components/ContactView';
import { PageId } from './types';
import { AlertCircle, Terminal, HelpCircle } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [apiConfig, setApiConfig] = useState({ hasApiKey: true, demoMode: false });

  // Fetch API key configurations on mount to notify user or developers about secrets setup
  useEffect(() => {
    async function checkConfig() {
      try {
        const response = await fetch('/api/config');
        const data = await response.json();
        setApiConfig(data);
      } catch (err) {
        console.warn("Could not retrieve API configurations from custom server.", err);
      }
    }
    checkConfig();
  }, []);

  // Render the current active page panel
  const renderCurrentView = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView setCurrentPage={setCurrentPage} />;
      case 'services':
        return <ServicesView setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutView setCurrentPage={setCurrentPage} />;
      case 'storyboard':
        return <StoryboardView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      
      {/* Top Notification Bar if in Demo Mode (API Key missing) */}
      {apiConfig.demoMode && (
        <div className="bg-blue-900/30 border-b border-blue-800 text-blue-300 px-4 py-2 text-center text-xs font-mono flex items-center justify-center space-x-2">
          <AlertCircle className="h-4 w-4 text-blue-400 shrink-0" />
          <span>
            <strong>HUAN Sandbox Active:</strong> API Key is currently unconfigured. Running in intelligent simulator mode. Provide a key in AI Studio Secrets panel for real-time Gemini feeds.
          </span>
        </div>
      )}

      {/* Header Sticky Bar */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Viewport Content with transition layouts */}
      <main className="flex-grow">
        {renderCurrentView()}
      </main>

      {/* Footer Segment */}
      <Footer setCurrentPage={setCurrentPage} />

    </div>
  );
}
