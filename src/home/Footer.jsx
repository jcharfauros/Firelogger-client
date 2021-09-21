import React from "react";
import { Row } from "reactstrap";

const Footer = () => {
    return (
        <footer>
            <Row>
                <p className= "font-nospace" style={{fontSize: 20, marginLeft: 30}} >&copy; FIRELOGGER <span /></p>
            </Row>
        </footer>
    );
};

export default Footer;