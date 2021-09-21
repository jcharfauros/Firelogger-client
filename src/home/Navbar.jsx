import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavText,
  NavLink,
  NavItem,
  Button,
  Col,
  Row,
  Container
} from "reactstrap";
import "../App.css";
import fireloggerlogo from "../assets/FIRELOG_LOGO.png";
import Auth from "../auth/Auth";

const FireloggerNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };

  const loginSignupHide = () => {
    return props.sessionToken === localStorage.getItem("token") ? (
      <Button className='btn-delete' color='black' onClick={props.clickLogout}>Logout</Button>
    ) : (
      <Auth updateToken={props.updateToken} />
    );
  };

  return (
    <Navbar className="navbar-jc" light expand="md">
      <Container fluid={true}>
        <Row>
          <Col>
            <NavbarBrand href="/">
              <img src={fireloggerlogo} alt="firelogger_logo" className="logo-img" />
            </NavbarBrand>
          </Col>
          <Col>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>{loginSignupHide()}</NavItem>
              </Nav>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default FireloggerNavbar;