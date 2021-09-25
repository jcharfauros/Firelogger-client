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
  UncontrolledDropdown,
  NavbarText,

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

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

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
      <UncontrolledDropdown>
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
      </UncontrolledDropdown>
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
    <Navbar light expand="md">
            <NavbarBrand href="/">
              <img
                src={fireloggerlogo}
                alt="firelogger_logo"
                className="logo-img"
              />
            </NavbarBrand>
            <NavbarToggler  onClick={toggle} />
            <Collapse id='navbar-loggedin' isOpen={isOpen} navbar>
              <Nav navbar >
                  {resourceViews()} 
                {/* <NavItem>
                </NavItem> */}
                <NavItem>
                  {home()} 
                </NavItem>
              </Nav>
              <NavbarText>{loginSignupHide()}</NavbarText>
            </Collapse>
    </Navbar>
  );
};

export default FireLoggerNavbar;

// return (
//   <Navbar className="navbar-jc" light expand="md">
//     <Container fluid={true}>
//       <Row>
//         <Col>
//           <NavbarBrand href="/">
//             <img
//               src={fireloggerlogo}
//               alt="firelogger_logo"
//               className="logo-img"
//             />
//           </NavbarBrand>
//         </Col>
//         <Col>
//           <NavbarToggler  onClick={toggle} />
//           <Collapse  isOpen={isOpen} navbar className="justify-content-end">
//             <Nav className="ml-auto" navbar >
//               <NavItem>
//                 {resourceViews()} 
//               </NavItem>
//               <NavItem>
//                 {home()} 
//               </NavItem>
//               <NavItem>
//                 {loginSignupHide()}
//               </NavItem>
//             </Nav>
//           </Collapse>
//         </Col>
//       </Row>
//     </Container>
//   </Navbar>
// );
// };
