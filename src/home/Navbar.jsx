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
  /* Do we want to make dropdowns? - julia */
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
} from "reactstrap";
import "../App.css";
import fireloggerlogo from "../assets/firelogger_logo_orange.png";
import Auth from "../auth/Auth";

const FireloggerNavbar = (props) => {
  const [userdisplayName, setUserDisplayName] = useState(""); //prep for stretch goal - display username Greeting
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };

  const loginSignupHide = () => {
    return props.sessionToken === localStorage.getItem("token") ? (
      <Button onClick={props.clickLogout}>Logout</Button>
    ) : (
      <Auth updateToken={props.updateToken} />
    );
  };

  return (
    <Navbar className="navbar-jc" light expand="md">
      <NavbarBrand href="/">
        <img src={fireloggerlogo} alt="firelogger_logo" className="logo-img" />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>{loginSignupHide()}</NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default FireloggerNavbar;
