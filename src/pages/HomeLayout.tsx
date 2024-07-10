import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <nav>navbar</nav>
      <Outlet />
    </>
  );
};

export default HomeLayout;
