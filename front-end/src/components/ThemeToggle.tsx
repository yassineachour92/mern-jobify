import React from "react";
import { useDashBoardContext } from "../pages/DashBoard";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import "../pages/style/themeToggle.css";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashBoardContext();
  return (
    <main className="button-theme" onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill className="toggle-icon" />
      ) : (
        <BsFillMoonFill className="toggle-icon" />
      )}
    </main>
  );
};

export default ThemeToggle;
