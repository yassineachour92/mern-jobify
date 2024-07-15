import React from "react";
import { FaAlignLeft, FaHome } from "react-icons/fa";

import "../pages/style/navbarStyle.css";
import Logo from "./Logo";
import { useDashBoardContext } from "../pages/DashBoard";

const Navbar = () => {
  const { toggleSiderbar } = useDashBoardContext();
  return (
    <div className="main">
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSiderbar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">dashboard</h4>
        </div>
        <div className="btn-container">
          {/* <ThemeToggle />
          <LogoutContainer /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
