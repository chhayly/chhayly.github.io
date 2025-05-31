// app/components/ThemeHandler.tsx
'use client';

import React, { useState, useEffect, useCallback } from 'react';

export default function ThemeHandler() {
  const [theme, setTheme] = useState('dark'); // Default theme

  // Effect to run on initial mount to set theme from localStorage or default
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const initialTheme = storedTheme ? storedTheme : 'dark'; // Default to dark if nothing stored
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
    updateGlobalToggleIcon(initialTheme);
  }, []);

  const updateGlobalToggleIcon = (currentTheme: string) => {
    const globalThemeToggle = document.getElementById('global-theme-toggle');
    if (globalThemeToggle) {
      const icon = globalThemeToggle.querySelector('i'); // Assuming there's an <i> tag
      if (icon) {
        icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
      } else { // Fallback if no <i> tag, e.g. the span placeholder
        globalThemeToggle.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';
      }
    }
  };

  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      updateGlobalToggleIcon(newTheme);
      return newTheme;
    });
  }, []);

  // Attach event listener to the global theme toggle button
  useEffect(() => {
    const globalThemeToggleButton = document.getElementById('global-theme-toggle');
    if (globalThemeToggleButton) {
      globalThemeToggleButton.addEventListener('click', toggleTheme);
    }

    // Cleanup
    return () => {
      if (globalThemeToggleButton) {
        globalThemeToggleButton.removeEventListener('click', toggleTheme);
      }
    };
  }, [toggleTheme]);

  // Update icon if theme changes due to other reasons (e.g. another tab)
  // This is a more advanced scenario, for now, we'll rely on initial load and direct toggle.
  // useEffect(() => {
  //  const handleStorageChange = (event: StorageEvent) => {
  //    if (event.key === 'theme' && event.newValue) {
  //      setTheme(event.newValue);
  //      document.documentElement.setAttribute('data-theme', event.newValue);
  //      updateGlobalToggleIcon(event.newValue);
  //    }
  //  };
  //  window.addEventListener('storage', handleStorageChange);
  //  return () => window.removeEventListener('storage', handleStorageChange);
  // }, []);


  return null; // This component does not render UI itself
}
