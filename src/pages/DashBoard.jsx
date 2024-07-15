import { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import SmallSidebar from "../components/SmallSidebar";
import BigSidebar from "../components/BigSidebar";
import Navbar from "../components/Navbar";

import "../pages/style/dashboard.css";

const DashBoardContext = createContext();

const DashBoard = () => {
  const user = { name: "john" };

  const [showSiderBar, setShowSiderBar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log("toggle dark theme");
  };

  const toggleSiderbar = () => {
    setShowSiderBar(!showSiderBar);
    console.log('tt');
  };

  const logoutUser = async () => {
    console.log("logout user");
  };

  return (
    <DashBoardContext.Provider
      value={{
        user,
        showSiderBar,
        setShowSiderBar,
        isDarkTheme,
        setIsDarkTheme,
        toggleSiderbar,
        toggleDarkTheme,
        logoutUser
      }}
    >
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
    </DashBoardContext.Provider>
  );
};

export const useDashBoardContext=()=>useContext(DashBoardContext);

export default DashBoard;
