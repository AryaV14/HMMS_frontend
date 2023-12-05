import "./App.css";
import Login from "./modules/Login";
import Register from "./modules/Reg";
import Dashboard from "./modules/Dashboard";
import Mess1 from "./modules/mess/Mess1";
import Menu from "./modules/menu/Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbars from "./modules/Navbars";
import React, { useState, useEffect } from 'react';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("key")) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Navbars />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reg" element={<Register />} />
        {isLoggedIn ?(
          <>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/home/mess" element={<Mess1 />} />
        <Route path="/mess" element={<Mess1 />} />
        <Route path="/home/menu" element={<Menu />} />
        <Route path="/menu" element={<Menu />} />
        </>
        ):(
          <Route path="*" element={<Login />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
