import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SmallSidebar from "../components/SmallSidebar";
import BigSidebar from "../components/BigSidebar";
import Navbar from "../components/Navbar";

import '../pages/style/dashboard.css'

const DashBoard = () => {
  const user={name:'john'}

  const[showSider,setShowSider ]=useState(false);
  const[isDarkTheme,setisDarkTheme ]=useState(false)


  return (
    <main className="dashboard">
      <SmallSidebar />
      <BigSidebar />
      <div>
        <Navbar />
        <div className="dashboard-page">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default DashBoard;
