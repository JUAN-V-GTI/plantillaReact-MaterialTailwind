import React from 'react';
import { ThemeProvider } from './providers/ThemeProvider';
import Home from './page/Home';

// Removed BrowserRouter, Routes, Route imports as they are no longer used.
// Removed import for ThemeDemo (already done).
// Assuming App.css import (if any) is handled in main.jsx or index.css directly.

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;