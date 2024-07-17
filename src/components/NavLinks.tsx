import React from "react";
import { NavLink } from "react-router-dom";
import links from "../utils/links";
import { useDashBoardContext } from "../pages/DashBoard";

interface isBigSidebarProps {
  isBigSidebar?: boolean;
}
const NavLinks = ({ isBigSidebar }: isBigSidebarProps) => {
  const { toggleSiderbar } = useDashBoardContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={isBigSidebar ? null : toggleSiderbar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
