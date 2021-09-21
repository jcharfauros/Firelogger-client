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
          <Button outline color="link" className="font-body" onClick={loginModalON} style={{marginRight: 10}}>
            Login
          </Button>
          <br />
          <Button outline color="link" className="font-body" onClick={signupModalON} style={{marginRight: 10}}>
            Signup
          </Button>
        </Col>
      </Row>
    </Container>

);
};

export default Auth;

{/* <Link to="/loginmodal" onClick={loginModalON} className="font-test" style={{marginLeft: 399}}>Login</Link> */}
{/* <Link to="/signupmodal" onClick={signupModalON} className="font-test" style={{marginRight: '5px'}}>Signup</Link> */}
