import React, { useState, useEffect } from "react";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Auth from "./auth/Auth";
import "./App.css";

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

  // let protectedViews = () => {
  //   return sessionToken === localStorage.getItem("token") ? (
  //     <InventoryIndex token={sessionToken} clearToken={clearToken} />
  //   ) : (
  //   );
  // };
  return (
    <div>
      <Auth updateToken={updateToken} />;{/* <Signup /> */}
      <Login updateToken={updateToken} />
      {/* {protectedViews()} */}
    </div>
  );
}

export default App;
