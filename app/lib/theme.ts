// Theme utility functions
"use client";

import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

// Check if we're in the browser
const isBrowser = typeof window !== 'undefined';

// Function to get the current theme
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check if theme is stored in localStorage
    if (isBrowser) {
      const storedTheme = localStorage.getItem('theme') as Theme;
      if (storedTheme) {
        return storedTheme;
      }
      
      // Check system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'system';
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
    } else {
      root.classList.remove('dark');
    }
    
    // Save the theme preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

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

  // Function to explicitly set the theme
  const setThemeValue = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return { theme, setTheme: setThemeValue, toggleTheme };
} 