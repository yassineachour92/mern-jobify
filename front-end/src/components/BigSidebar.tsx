import React from "react";
import { useDashBoardContext } from "../pages/DashBoard";
import Logo from "./Logo";
import NavLinks from "./NavLinks.tsx";

import "../pages/style/bigSidebar.css";
const BigSidebar = () => {
  const { showSiderBar } = useDashBoardContext();
  return (
    <main className="big-sidebar-main">
      <div
        className={
          showSiderBar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks isBigSidebar />
        </div>
      </div>
    </main>
  );
};

export default BigSidebar;
