import React, { createContext, useContext, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Define light and dark themes
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // Medium Blue
    },
    secondary: {
      main: "#03dac5", // Vibrant Teal
    },
    background: {
      default: "#fafafa", // Very Light Grey
    },
    text: {
      primary: "#333333", // Dark Grey
      secondary: "#666666", // Mid-Grey for less important text
    },
    action: {
      active: "#ff9800", // Orange (common accent color)
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // Soft Blue
    },
    secondary: {
      main: "#03dac6", // Cyan for contrast
    },
    background: {
      default: "#121212", // Dark Grey (standard for dark mode)
    },
    text: {
      primary: "#e0e0e0", // Light Grey
      secondary: "#b0b0b0", // Softer grey for secondary text
    },
    action: {
      active: "#ffb74d", // Orange for consistent action color
    },
  },
});

// Create a context to manage the theme
const ThemeContext = createContext();

// ThemeProvider component to wrap the app
export const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Normalize styles for light/dark mode */}
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
};
