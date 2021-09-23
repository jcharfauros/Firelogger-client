import React, { useState, useEffect } from "react";
import "./App.css";
import FireloggerNavbar from "./home/Navbar";
import Footer from "../src/home/Footer";
import Header from "./home/Header";
import Switch from "./home/Switch";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
      <Switch sessionToken={sessionToken} />
    ) : (
      <Header />
    );
  };

  return (
    <div style={{ backgroundImage: "url()"}}>
      <Router>
        <FireloggerNavbar
          clickLogout={clearToken}
          updateToken={updateToken}
          sessionToken={sessionToken}
        />
        {protectedViews()}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
