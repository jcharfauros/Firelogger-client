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
} from "reactstrap";
import "../App.css";
import fireloggerlogo from "../assets/FIRELOGGER W TEXT small.png";
import Auth from "../auth/Auth";

const FireLoggerNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };

  const loginSignupHide = () => {
    return props.sessionToken === localStorage.getItem("token") ? (
      <Button onClick={props.clickLogout} outline color="link" className='font-test' style={{ marginRight: 600}}>Logout</Button>
      
    ) : (
      <Auth updateToken={props.updateToken} />
    );
  };

  return (
      <Navbar className="navbar-jc" light expand="md">
        <NavbarBrand href="/">
          <img
            src={fireloggerlogo}
            alt="firelogger_logo"
            className="logo-img"
            style={{marginLeft: 20}}
          /> 
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        
          <Nav>
            <NavItem>{loginSignupHide()}</NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
};

export default FireLoggerNavbar;
