import React, { useEffect, useState } from "react";
import { Row, Container, Table, Button, Col } from "reactstrap";
import '../App.css';
// import ReactHtmlParser from "react-html-parser";

const Pets = (props) => {
  const [pet, setPet] = useState({});

  let petfetch = (e) => {
    fetch("http://localhost:3000/petcare", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setPet(data.results);
        console.log(data.results);
      });
  };

  useEffect(() => {
    petfetch();
  }, []);

  const petMapper = () => {
    return pet.slice(0, 10).map((pet) => {
      console.log(pet.photos);
      return (
        <tr key={pet.id}>
          <td>{pet.name}</td>
          <td>{pet.formatted_address}</td>
          {/* <td>{ReactHtmlParser(pet.photos[0].html_attributions[0])}</td> */}

          <td>
            {/* {pet.photos !== undefined
              ? ReactHtmlParser(pet.photos[0].html_attributions[0])
              : "Link not available"} */}

            {pet.photos !== undefined ? (
              <a
                href={`https://maps.google.com/?q=${pet.formatted_address}`}
                target="_blank"
              >
                <button className="btn-resource">Click for Location</button>
              </a>
            ) : (
              <p className='font-err'>Link unavailable</p>
            )}
          </td>
        </tr>
      );
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="font-titles">
            Pet Boarding Nearby{" "}
          </h1>
          <hr />
        </Col>
      </Row>
      <Row>        
          <Table responsive borderless hover>
             <thead>
              <tr className='font-table'>
                <th scope="row">Name:</th>
                <th scope="row">Address:</th>
                <th scope="row">Google Map Link:</th>
              </tr>
             </thead>
             <tbody>{pet.length > 0 ? petMapper() : "Loading"}</tbody>
           </Table>
       </Row>
    </Container>
  );
};

export default Pets;