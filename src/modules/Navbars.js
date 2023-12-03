import { IoMdNotifications } from "react-icons/io";
import pfp from "../assets/noavatar.png";

import "./navbars.css";
import { Link, useLocation } from "react-router-dom";
import { useState,useEffect } from "react";

<script
  src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
  crossorigin
></script>;
const Navbars = () => {
  const { pathname } = useLocation();
  const [username, setUsername] = useState("Loading...");

  useEffect(() => {
    const checkUsername = () => {
      const fetchedUsername = sessionStorage.getItem("username");
      if (fetchedUsername) {
        // If the username is available, update the state
        setUsername(fetchedUsername);
      } else {
        // If the username is not available, check again after a delay
        setTimeout(checkUsername, 1000); // Adjust the delay (in milliseconds) as needed
      }
    };

    // Start checking for the username when the component mounts
    checkUsername();
  }, [username]);
  
  return (
    <div className="head-nav">
      <div className="head-left">
        <div style={{ color: 'white', fontSize: '16px', fontWeight: 600 }}>Hey there,</div>
        
        <div style={{ color: 'white', fontSize: '24px', fontWeight: 'bold',paddingTop:"8px" }}>{username}</div>

      </div>
      <div className="head-right">
        <div className="icons">
          <Link to={"/home"}>
            <div
              className={
                pathname === "/home" ? "head-btn current-head-btn" : "head-btn"
              }
            >
              Home
            </div>
          </Link>
          <Link to={"/menu"}>
            <div
              className={
                pathname === "/menu" ? "head-btn current-head-btn" : "head-btn"
              }
            >
              Menu
            </div>
          </Link>
          <Link to={"/mess"}>
            <div
              className={
                pathname === "/mess" ? "head-btn current-head-btn" : "head-btn"
              }
            >
              Mess
            </div>
          </Link>
        </div>
        <div className="icons2">
          <div className="bell">
            <IoMdNotifications/>
          </div>
          <img className="head-pfp" src={pfp} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default Navbars;
