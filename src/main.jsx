import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Main styles for the application
// import "./App.css"; // App.css has been deleted

// ThemeProvider is now applied only in App.jsx
// import { ThemeProvider } from './providers/ThemeProvider'; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* ThemeProvider removed from here, App.jsx handles it */}
    <App />
  </React.StrictMode>
);