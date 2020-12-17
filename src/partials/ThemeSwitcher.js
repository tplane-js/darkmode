import React, { useContext } from "react";
import ThemeContext from "./../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const ThemeSwitcher = (props) => {
  const { dark, toggleTheme } = useContext(ThemeContext);
  const currentIcon = dark ? faSun : faMoon;
  const iconColor = dark ? "#FFA500" : "#4D5B6B";
  return (
    <button
      className="app__dark-mode-btn icon level-right"
      onClick={toggleTheme}
    >
      <FontAwesomeIcon icon={currentIcon} color={iconColor} />
    </button>
  );
};

export default ThemeSwitcher;
