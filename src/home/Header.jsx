import React from "react";
import { Container, Row, Col } from "reactstrap";
import home from "../assets/FL background test 2.png";
import "../App.css";

const Header = (props) => {
  return (
    <div>
      <Container >
      <img src={home} alt="logo_img" className="img-fluid" />
        <Row>
          <Col className="font-body text-on-image-top">
            <h2>When the unexpected happens...</h2>
          </Col>          
        </Row>
        <br />          
        <Row>          
          <Col className="font-body text-on-image-middle">
           <p>Firelogger is an app that keeps track of what you hold dear when the unexpected happens. </p>
           <p>Whether it be a house fire, flooding or your home is burglarized, Firelogger is a visual record keeper of your valuables. Add or delete items with a click of a button or download an inventory list for insurance purposes.
            </p>
          </Col>
        </Row>  
      </Container>
    </div>
  );
};

export default Header;


// return (
//   <div>
//     <img src={home} alt="logo_img" className="img-fluid" />
//     <Container>
//       <Row>
//         <Col
//           xs="12"
//           sm="12"
//           md="12"
//           lg="12"
//           className="font-body text-on-image-top"
//         >
//           <h2>When the unexpected happens...</h2>
//         </Col>
//         <Col xs="12" sm="12" md="12" lg="12"></Col>
//       </Row>
//       <br />
//       <Row>
//         <Col
//           xs="3"
//           sm="3"
//           md="3"
//           lg="3"
//           className="font-body text-on-image-middle"
//           >
//          <p>Firelogger is an app that keeps track of what you hold dear when the unexpected happens. </p>
//          <p>Whether it be a house fire, flooding or your home is burglarized, Firelogger is a visual record keeper of your valuables. Add or delete items with a click of a button or download an inventory list for insurance purposes.
//           </p>
//         </Col>
//         <Col xs="5" sm="5" md="5" lg="5"></Col>
//         <Col xs="4" sm="4" md="4" lg="4"></Col>
//       </Row>
//       {/* <Row>
//         <Col xs="3" sm="3" md="3" lg="3" className="font-body text-on-image-bottom">
//           Start logging your valuables today!
//         </Col>
//         <Col xs="5" sm="5" md="5" lg="5"></Col>
//         <Col xs="4" sm="4" md="4" lg="4"></Col>
//       </Row> */}
//     </Container>
//   </div>
// );
// };