// Defensive patch for environments where window.fetch is getter-only
try {
  const originalFetch = window.fetch;
  let currentFetch = originalFetch;
  Object.defineProperty(window, 'fetch', {
    get() { return currentFetch; },
    set(val) { currentFetch = val; },
    configurable: true,
    enumerable: true
  });
} catch (e) {
  console.warn("Could not patch window.fetch in main.tsx:", e);
}

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
