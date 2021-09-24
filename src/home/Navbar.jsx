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
  Row,
  Container,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,

} from "reactstrap";
import "../App.css";
import fireloggerlogo from "../assets/FIre Logger Logo.png";
import Auth from "../auth/Auth";
import Hotels from "./Hotels";
import Pets from "./Pet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InventoryIndex from "../inventory/InventoryIndex";

const FireLoggerNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle2 = () => {
    let newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const loginSignupHide = () => {
    return props.sessionToken === localStorage.getItem("token") ? (
      <Button className="btn-navbar" color="black" onClick={props.clickLogout}>
        Logout
      </Button>
    ) : (
      <Auth updateToken={props.updateToken} />
    );
  };

  const resourceViews = () => {
    return props.sessionToken === localStorage.getItem("token") ? (
      <Dropdown
        direction='left'
        className="resource-dropdown"
        isOpen={dropdownOpen}
        toggle={toggle}
      >
        <DropdownToggle caret className="btn-navbar" color="black">
          Resources
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>

            <Link className='btn-dropdown' to="/hotels"> Hotels in your area </Link>
          </DropdownItem>
          <DropdownItem>
            <Link className='btn-dropdown' to="/petcare">Pet Boarding in your area </Link>
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
        <Button className="btn-navbar" color="black">
          Home
        </Button>
      </a>
    ) : (
      ""
    );
  };

  return (
    <Navbar className="navbar-jc" light expand="md">
      <Container fluid={true}>
        <Row>
          <Col>
            <NavbarBrand href="/">
              <img
                src={fireloggerlogo}
                alt="firelogger_logo"
                className="logo-img"
              />
            </NavbarBrand>
          </Col>
          <Col>
            <NavbarToggler  onClick={toggle} />
            <Collapse  isOpen={isOpen} navbar>
              <Nav className="ml-auto"  navbar >
                <NavItem className='nav-link'>{resourceViews()} </NavItem>
                <NavItem className='nav-link'>{home()} </NavItem>
                <NavItem className='nav-link'>{loginSignupHide()}</NavItem>
              </Nav>
            </Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default FireLoggerNavbar;