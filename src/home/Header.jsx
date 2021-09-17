import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Header = () => {
    return (
        <header>
            <Navbar className="header">
                <NavbarBrand className="font-test" style={{ marginRight: 15, marginLeft: 15 }} href="/">Put logo here</NavbarBrand>
                <Nav className="ml-auto"> 
                    <NavItem>
                        <NavLink className="font-test" style={{ marginRight: 15, marginLeft: 15 }} href="/"> 
                            Brought to you by the FireLogger Team (link to about here)
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </header>
    );
};

export default Header;