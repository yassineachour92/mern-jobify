import React, { useContext } from "react";
import { useDashBoardContext } from "../pages/DashBoard";

import "../pages/style/smallSiderBar.css";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import NavLinks from "./NavLinks.tsx";

const SmallSidebar = () => {
  const { showSiderBar, toggleSiderbar } = useDashBoardContext();

  return (
    <main className="small-sidebar-main">
      <div
        className={
          showSiderBar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSiderbar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </main>
  );
};

export default SmallSidebar;
