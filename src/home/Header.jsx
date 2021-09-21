import React from "react";
import { Container, Row, Col } from "reactstrap";
import home from "../assets/FL background test 2.png";
import "../App.css";

const Header = (props) => {
  return (
    <div>
      <img src={home} alt="logo_img" className="img-fluid" />
      <Container>
        <Row>
          <Col
            xs="12"
            sm="12"
            md="12"
            lg="12"
            className="font-body text-on-image-top"
          >
            When the unexpected happens...
          </Col>
          <Col xs="12" sm="12" md="12" lg="12"></Col>
        </Row>
        <br />
        <Row>
          <Col
            xs="3"
            sm="3"
            md="3"
            lg="3"
            className="font-body text-on-image-middle"
            >
            With FireLogger, you can log your valuables in one place before the
            unexpected! If the unthinkable does happen, such as a fire consuming
            your home, you have a list of your valuables at the click of a
            button. You can log serial numbers, item value, a photo of each of
            your valuables and more!
          </Col>
          <Col xs="5" sm="5" md="5" lg="5"></Col>
          <Col xs="4" sm="4" md="4" lg="4"></Col>
        </Row>
        {/* <Row>
          <Col xs="3" sm="3" md="3" lg="3" className="font-body text-on-image-bottom">
            Start logging your valuables today!
          </Col>
          <Col xs="5" sm="5" md="5" lg="5"></Col>
          <Col xs="4" sm="4" md="4" lg="4"></Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default Header;
