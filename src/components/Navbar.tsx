import React from "react";
import { FaAlignLeft, FaHome } from "react-icons/fa";

import "../pages/style/navbarStyle.css";
import Logo from "./Logo";
import { useDashBoardContext } from "../pages/DashBoard";
import LogoutContainer from "./LogoutContainer.jsx";
import ThemeToggle from "./ThemeToggle.js";

const Navbar = () => {
    
  const { toggleSiderbar,showSiderBar } = useDashBoardContext();
  return (
    <main className="navBar-main">
      <div className="nav-center">
        <button type="button" className={showSiderBar ? "toggle-btn showSideBar" : "toggle-btn"}

         onClick={toggleSiderbar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">dashboard</h4>
        </div>
        <div className="btn-container">
           <ThemeToggle />
          <LogoutContainer /> 
        </div>
      </div>
    </main>
  );
};

export default Navbar;
