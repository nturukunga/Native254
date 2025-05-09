"use client";

import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

type ThemeProviderProps = {
  children: ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};

// Create context with a default value
const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
});

// Hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Provider component
export function ThemeProvider({ children }: ThemeProviderProps) {
  // Check if we're in the browser
  const isBrowser = typeof window !== 'undefined';
  
  // Initialize theme state
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if theme is stored in localStorage
    if (isBrowser) {
      const storedTheme = localStorage.getItem('theme') as Theme;
      if (storedTheme && ['light', 'dark', 'system'].includes(storedTheme)) {
        return storedTheme;
      }
      
      // Check system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    
    return 'light'; // Default theme
  });

  // Effect to update the DOM when the theme changes
  useEffect(() => {
    if (!isBrowser) return;
    
    const root = document.documentElement;
    const isDark = 
      theme === 'dark' || 
      (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    // Toggle the dark class on the html element
    if (isDark) {
      root.classList.add('dark');
      document.body.classList.add('dark-theme');
    } else {
      root.classList.remove('dark');
      document.body.classList.remove('dark-theme');
    }
    
    // Set a data attribute for theme access in CSS
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    
    // Save the theme preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme, isBrowser]);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => {
      if (prevTheme === 'light') return 'dark';
      if (prevTheme === 'dark') return 'light';
      
      // If system, check what the system preference is and set to the opposite
      const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return systemIsDark ? 'light' : 'dark';
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
