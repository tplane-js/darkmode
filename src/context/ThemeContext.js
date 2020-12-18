import React, { useState, createContext, useLayoutEffect } from "react";
import { useEffect } from "react";

const localStorageKey = 'DARK_THEME_KEY';

const ThemeContext = createContext({
  dark: false,
  toggleTheme: () => {},
});


const stringToBool = str => {
  return str === null ? false : JSON.parse(str);
}
  
export const ThemeProvider = (props) => {
  const [dark, setDark] = useState(stringToBool(window.localStorage.getItem(localStorageKey)));

  const toggleTheme = () => {
    setDark(!dark);
    window.localStorage.setItem(localStorageKey, !dark);
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
