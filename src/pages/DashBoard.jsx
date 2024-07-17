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
    const newDarkTheme=!isDarkTheme;
    setIsDarkTheme(newDarkTheme)
    document.body.classList.toggle('dar-theme',newDarkTheme);
    localStorage.setItem('darkTheme',newDarkTheme)
  };

  const toggleSiderbar = () => {
    setShowSiderBar(!showSiderBar);
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
      <main className="dashboard-main">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className={showSiderBar ? "dashboard-page showSideBarDashBoard":"dashboard-page"}>
            <Outlet />
          </div>
        </div>
      </main>
    </DashBoardContext.Provider>
  );
};

export const useDashBoardContext=()=>useContext(DashBoardContext);

export default DashBoard;
