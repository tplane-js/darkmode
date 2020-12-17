import React, { useState, createContext, useLayoutEffect } from "react";

const ThemeContext = createContext({
  dark: false,
  toggleTheme: () => {},
});

export const ThemeProvider = (props) => {
  const [dark, setDark] = useState(false);

  useLayoutEffect(() => {
    const isDarkTheme = window.localStorage.getItem("darkTheme");

    if (isDarkTheme === "true") {
      setDark(true);
    } else {
      setDark(false);
    }
    // if state changes, repaints the app
  }, [dark]);

  const toggleTheme = () => {
    setDark(!dark);
    window.localStorage.setItem("darkTheme", !dark);
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
