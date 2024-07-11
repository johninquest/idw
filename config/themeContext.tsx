import React, { createContext, useContext, useState } from 'react';
import { theme as defaultTheme, Theme } from './theme';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void; 
} 



const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  toggleTheme: () => {}, // Placeholder for now
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = () => {
    // Your theme switching logic here
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  return useContext(ThemeContext);
};
