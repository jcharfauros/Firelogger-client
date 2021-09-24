import React from "react";
import { Row } from "reactstrap";
import '../App.css'

const Footer = () => {
    return (
        <footer>
            <Row>
                <h4 className= "font-nospace" >&copy; FIRELOGGER <span className='footer-font-year'>2021</span></h4>
            </Row>
        </footer>
    );
};

export default Footer;