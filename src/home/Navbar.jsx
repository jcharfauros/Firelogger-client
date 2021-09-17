import React, { useState } from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom';
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
import Signup from "../auth/Signup";


const FireLoggerNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
   
    const toggle = () => {
      let newIsOpen = !isOpen;
      setIsOpen(newIsOpen);
    };


  return (
    <Navbar sticky="top">
        <Router>
        
        <Link to="/signup"
        style={{ marginRight: 0, marginLeft: 25 }}
        className="font-test"
        >Signup</Link>
        
        <Link to="/login"
        style={{ marginRight: 25}}
        className="font-test"
        >Login</Link>

        {/* <Link to="/about"
        className="font-test"
        >About</Link> */}
        </Router>
    </Navbar>

    // <div>
    //   <Navbar color="light" light expand="md">
    //     <NavbarBrand href="/">Put Logo Here</NavbarBrand>
    //     <NavbarToggler onClick={toggle} />
    //     <Collapse isOpen={isOpen} navbar>
    //       <Nav className="ml-auto" navbar>
    //         <NavItem>
    //           <Button onClick={props.clickLogout}>Logout</Button>
    //         </NavItem>
    //             <NavLink to="/Signup">SignUp</NavLink>
    //       </Nav>
    //     </Collapse>
    //     <NavLink to="/Resources">Resources</NavLink>
    //   </Navbar>
    // </div>
  );
};

export default FireLoggerNavbar;
