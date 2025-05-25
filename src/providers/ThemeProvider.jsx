import React, { useState, useEffect } from 'react';
import { ThemeProvider as MaterialTailwindProvider } from '@material-tailwind/react';
import { ThemeContext } from '../context/theme.context'; // Assuming this path

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Efecto para cargar el tema guardado o detectar preferencia del sistema
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  // Función para cambiar tema
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MaterialTailwindProvider>
        {/* The div that was here previously setting bg-gray-50/900 is removed or simplified */}
        {children}
      </MaterialTailwindProvider>
    </ThemeContext.Provider>
  );
};
