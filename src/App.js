import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import InventoryIndex from "./inventory/InventoryIndex";
import Auth from "./auth/Auth";
import FireLoggerNavbar from "./home/Navbar";
// import Login from "./auth/Login";
// import Resources from "./home/Resources";
// import Hotels from "./home/Hotels";
// import Pets from "./home/Pet";
import JumboHome from "./home/Home";
import Header from "./home/Header";
import Footer from "./home/Footer";



function App() {
  // const [sessionToken, setSessionToken] = useState("");

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     setSessionToken(localStorage.getItem("token"));
  //   }
  // }, []);

  // const updateToken = (newToken) => {
  //   localStorage.setItem("token", newToken);
  //   setSessionToken(newToken);
  //   console.log(sessionToken);
  // };

  // const clearToken = () => {
  //   localStorage.clear();
  //   setSessionToken("");
  // };

  // const protectedViews = () => {
  //   return sessionToken === localStorage.getItem("token") ? (
  //     <InventoryIndex token={sessionToken} />
  //   ) : (
  //     <Auth updateToken={updateToken} />
  //   );
  // };


  return (
    <div>
      <Header />
      <FireLoggerNavbar  />
      <Router>
      <Switch>
      <JumboHome />
      
      {/* {protectedViews()} */}
      {/* <Hotels />
      <Pets /> */}
      </Switch>
     </Router>
     <Footer />
     </div>
  );
}

export default App;

// clickLogout={clearToken}