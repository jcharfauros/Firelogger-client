import React from "react";
import { useState, useEffect } from "react";
// import Login from "./Login"
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";
// import Signup from "./Signup";

import { Container, Row, Col, Button } from "reactstrap";

const Auth = (props) => {
  const [signupModalActive, setsignupModalActive] = useState(false);
  const [loginModalActive, setloginModalActive] = useState(false);

  const signupModalON = () => {
    setsignupModalActive(true);
  };
  const loginModalON = () => {
    setloginModalActive(true);
  };

  const signupModalOFF = () => {
    setsignupModalActive(false);
  };

  const loginModalOFF = () => {
    setloginModalActive(false);
  };

  return (
    <Container className="auth-container">
      <Row>
        <Col xs="2">
          {signupModalActive ? (
            <SignupModal
              signupModalOFF={signupModalOFF}
              updateToken={props.updateToken}
            />
          ) : (
            <></>
          )}
        </Col>
        <Col xs="2">
          {loginModalActive ? (
            <LoginModal
              loginModalOFF={loginModalOFF}
              updateToken={props.updateToken}
            />
          ) : (
            <></>
          )}
        </Col>
        <Col xs="2">
          <Button color="primary" onClick={signupModalON}>
            Signup
          </Button>
          <Button color="warning" onClick={loginModalON}>
            Login
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
