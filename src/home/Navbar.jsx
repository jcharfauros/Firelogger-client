import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Dropdown,
  Col,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import "../App.css";
import fireloggerlogo from "../assets/firelogger_logo_orange.png";
import Auth from "../auth/Auth";
import Hotels from "./Hotels";
import Pets from "./Pet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InventoryIndex from "../inventory/InventoryIndex";

const FireloggerNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const loginSignupHide = () => {
    return props.sessionToken === localStorage.getItem("token") ? (
      <Button onClick={props.clickLogout}>Logout</Button>
    ) : (
      <Auth updateToken={props.updateToken} />
    );
  };

  const resourceViews = () => {
    return props.sessionToken === localStorage.getItem("token") ? (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>Resources</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <Link to="/hotels"> Hotels in your area </Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="/petcare">Pet Boarding in your area </Link>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    ) : (
      ""
    );
  };

  const home = () => {
    return props.sessionToken === localStorage.getItem("token") ? (
      <a href="/">
        <Button>Home</Button>
      </a>
    ) : (
      ""
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
          <NavItem>{resourceViews()}</NavItem>
          <NavItem>{home()}</NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default FireloggerNavbar;
