import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";

const Header2 = (props) => {
  
  return (
      <div className='container-img' fluid={true}>
        <Container>
          <Row>
            <Col xs='6' className='font-body'>
                <h2>When the unexpected happens...</h2>
            </Col>
          </Row>
        <br />
          <Row>
            <Col xs='7' className='font-body'>
              <p className='font-p'>Firelogger is an app that keeps track of what you hold dear when the unexpected happens. </p>
            </Col>
          </Row>
          <Row>
            <Col xs='6' className='font-body'>
              <p className='font-p'>Whether it be a house fire, flooding or your home is burglarized, Firelogger is a visual record keeper of your valuables. Add or delete items with a click of a button or download an inventory list for insurance purposes.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };

  export default Header2;