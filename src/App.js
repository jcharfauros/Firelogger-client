import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import InventoryIndex from "./inventory/InventoryIndex";
import Auth from "./auth/Auth";
import FireloggerNavbar from "./home/Navbar";
// import Login from "./auth/Login";
import LoginModal from "./auth/LoginModal";
import Resources from "./home/Resources";
import Hotels from "./home/Hotels";
import Pets from "./home/Pet";


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
      <InventoryIndex token={sessionToken} />
    ) : (
      <JumboTest />
      // <Auth updateToken={updateToken} />
    );
  };

  return (
    <div>
      <FireloggerNavbar
        clickLogout={clearToken}
        updateToken={updateToken}
        sessionToken={sessionToken}
      />
      {protectedViews()}
      {/* <Hotels />
      <Pets /> */}
    </div>
  );
}

export default App;

// clickLogout={clearToken}