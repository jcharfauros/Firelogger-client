import React from "react";
import { useState } from "react"; //removed unused useEffect
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
    <Container fluid>
      <Row>
        <Col>
          {signupModalActive ? (
            <SignupModal
              signupModalOFF={signupModalOFF}
              updateToken={props.updateToken}
            />
          ) : (
            <></>
          )}
        </Col>
        <Col>
          {loginModalActive ? (
            <LoginModal
              loginModalOFF={loginModalOFF}
              updateToken={props.updateToken}
            />
          ) : (
            <></>
          )}
        </Col>
        <Col xs='9'>         
          <Button className="btn-delete" color='black' onClick={loginModalON} >
            Login
          </Button>          
          <Button className="btn-delete" color='black' onClick={signupModalON} >
            Signup
          </Button>
        </Col>
      </Row>
    </Container>

);
};

export default Auth;