import React from "react";
import { Row } from "reactstrap";

const Footer = () => {
    return (
        <footer>
            <Row>
                <p className="font-test" style={{fontSize: 22}}>&copy;FireLogger {new Date().getFullYear()}</p>
            </Row>
        </footer>
    );
};

export default Footer;