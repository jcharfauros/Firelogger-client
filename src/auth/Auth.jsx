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
    <Container fluid={true}>
      {signupModalActive ? ( <SignupModal signupModalOFF={signupModalOFF} updateToken={props.updateToken} />
          ) : (
            <></>
          )}
      {loginModalActive ? ( <LoginModal loginModalOFF={loginModalOFF} updateToken={props.updateToken} />
          ) : (
            <></>
          )}
      <Row>
        <Col>         
          <Button className="btn-nav-login-signup" color='black' onClick={loginModalON} >
            Login
          </Button>       
          <Button className="btn-nav-login-signup" color='black' onClick={signupModalON} >
            Signup
          </Button>
        </Col>
      </Row>
    </Container>

);
};

export default Auth;

// return (
//   <Container fluid>
//     <Row>
//       <Col>
//         {signupModalActive ? (
//           <SignupModal
//             signupModalOFF={signupModalOFF}
//             updateToken={props.updateToken}
//           />
//         ) : (
//           <></>
//         )}
//       </Col>
//       <Col>
//         {loginModalActive ? (
//           <LoginModal
//             loginModalOFF={loginModalOFF}
//             updateToken={props.updateToken}
//           />
//         ) : (
//           <></>
//         )}
//       </Col>
//       <Col>         
//         <Button className="btn-nav-login-signup" color='black' onClick={loginModalON} >
//           Login
//         </Button>       
//         <Button className="btn-nav-login-signup" color='black' onClick={signupModalON} >
//           Signup
//         </Button>
//       </Col>
//     </Row>
//   </Container>

// );