import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import {
  Container,
  Row,
  Col
} from 'reactstrap';

const Auth = (props) => {
  return (
    <Container  className='auth-container'>
      <Row>
        <Col xs='3'>
        <Signup updateToken={props.updateToken} />
        </Col>
        <Col xs='3'>
        <Login updateToken={props.updateToken} />
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
