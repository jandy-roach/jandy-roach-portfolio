import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true); // Default to dark theme
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Initialize theme on component mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const darkMode = savedTheme === 'dark';
      setIsDark(darkMode);
      updateTheme(darkMode);
    } else {
      // Default to dark theme
      updateTheme(true);
    }
  }, []);

  const updateTheme = (darkMode) => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.add('light');
      html.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    setIsAnimating(true);
    
    // Add transition blur effect
    document.body.style.filter = 'blur(2px)';
    document.body.style.transition = 'filter 0.3s ease-in-out';
    
    setTimeout(() => {
      const newTheme = !isDark;
      setIsDark(newTheme);
      updateTheme(newTheme);
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      
      // Remove blur effect
      document.body.style.filter = 'none';
      
      setTimeout(() => {
        setIsAnimating(false);
        document.body.style.transition = '';
      }, 300);
    }, 150);
  };

  return (
    <button
      onClick={toggleTheme}
      disabled={isAnimating}
      className={`
        relative w-16 h-8 rounded-full p-1 transition-all duration-500 ease-in-out
        ${isDark 
          ? 'bg-gradient-to-r from-slate-700 to-slate-800 border border-slate-600' 
          : 'bg-gradient-to-r from-blue-400 to-cyan-400 border border-blue-300'
        }
        hover:scale-105 active:scale-95 transform
        focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
        shadow-lg hover:shadow-xl
        ${isAnimating ? 'pointer-events-none' : ''}
      `}
      aria-label="Toggle theme"
    >
      {/* Sliding circle */}
      <div
        className={`
          absolute top-1 w-6 h-6 rounded-full transition-all duration-500 ease-in-out
          flex items-center justify-center
          ${isDark 
            ? 'left-1 bg-slate-300 shadow-md' 
            : 'left-9 bg-white shadow-lg'
          }
          ${isAnimating ? 'animate-pulse' : ''}
        `}
      >
        {/* Icon container with rotation animation */}
        <div
          className={`
            transition-all duration-500 ease-in-out transform
            ${isDark ? 'rotate-0' : 'rotate-180'}
          `}
        >
          {isDark ? (
            <Moon className="w-4 h-4 text-slate-600" />
          ) : (
            <Sun className="w-4 h-4 text-amber-500" />
          )}
        </div>
      </div>
      
      {/* Background icons */}
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <Moon 
          className={`
            w-3 h-3 transition-all duration-500
            ${isDark ? 'text-slate-400 opacity-100' : 'text-slate-600 opacity-30'}
          `} 
        />
        <Sun 
          className={`
            w-3 h-3 transition-all duration-500
            ${isDark ? 'text-amber-400 opacity-30' : 'text-amber-500 opacity-100'}
          `} 
        />
      </div>
      
      {/* Animated glow effect */}
      <div
        className={`
          absolute inset-0 rounded-full transition-all duration-500 ease-in-out
          ${isDark 
            ? 'shadow-inner shadow-slate-900/50' 
            : 'shadow-inner shadow-cyan-500/20'
          }
          ${isAnimating ? 'animate-ping opacity-75' : ''}
        `}
      />
    </button>
  );
};

export default ThemeToggle;