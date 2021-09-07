import React from "react";
// import Login from "./Login";
import Signup from "./Signup";

const Auth = (props) => {
  return (
    <div>
      <Signup updateToken={props.updateToken} />
      {/* <Login updateToken={props.updateToken} />{" "} */}
    </div>
  );
};

export default Auth;
