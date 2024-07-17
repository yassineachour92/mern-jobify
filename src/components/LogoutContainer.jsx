import { useState } from "react";
import { useDashBoardContext } from "../pages/DashBoard";
import { FaUserCircle } from "react-icons/fa";
import "../pages/style/logoutStyle.css";

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashBoardContext();
  return (
    <div className="logout-style">
      <button
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      >
        <FaUserCircle />
        {user?.name}
      </button>
      <div className={showLogout? 'dropdown show-dropdown':'dropdown'}>
        <button type='button' className="dropdown-btn" onClick={logoutUser}>
            logout
        </button>
      </div>
    </div>
  );
};

export default LogoutContainer;
