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


const FireLoggerNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      let newIsOpen = !isOpen;
      setIsOpen(newIsOpen);
    };


  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Firelogger App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Button onClick={props.clickLogout}>Logout</Button>
            </NavItem>
          </Nav>
        </Collapse>
        <NavLink to="/Resources">Resources</NavLink>
      </Navbar>
    </div>
  );
};

export default FireLoggerNavbar;
