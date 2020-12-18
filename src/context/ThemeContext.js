import React, { useState, createContext, useLayoutEffect } from "react";
import { useEffect } from "react";

const ThemeContext = createContext({
  dark: false,
  toggleTheme: () => {},
});


const stringToBool = str => JSON.parse(str.toLowerCase());
  
export const ThemeProvider = (props) => {
  const [dark, setDark] = useState(stringToBool(window.localStorage.getItem("darkTheme")));
  
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
