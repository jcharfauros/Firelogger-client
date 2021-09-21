import React, { useState, useEffect } from "react";
import "./App.css";
import InventoryIndex from "./inventory/InventoryIndex";
// import Auth from "./auth/Auth";
import FireloggerNavbar from "./home/Navbar";
// import Login from "./auth/Login";
// import LoginModal from "./auth/LoginModal";
// import Resources from "./home/Resources";
// import Hotels from "./home/Hotels";
// import Pets from "./home/Pet";
import LoginModal from "./auth/LoginModal";
import Resources from "./home/Resources";
import Hotels from "./home/Hotels";
import Pets from "./home/Pet";
import Switch from "./home/Switch";
import { BrowserRouter as Router, Route } from "react-router-dom";

import JumboTest from "./home/Header";

function App() {
  const [sessionToken, setSessionToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };

  const protectedViews = () => {
    return sessionToken === localStorage.getItem("token") ? (
      <Switch token={sessionToken} />
    ) : (
      <JumboTest />
    );
  };

  return (
    <div>
      <Router>
        <FireloggerNavbar
          clickLogout={clearToken}
          updateToken={updateToken}
          sessionToken={sessionToken}
        />
        {protectedViews()}
      </Router>
    </div>
  );
}

export default App;
