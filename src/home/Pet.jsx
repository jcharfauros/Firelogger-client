import React, { useEffect, useState } from "react";
import { Row, Container, Table, Button } from "reactstrap";
import ReactHtmlParser from "react-html-parser";

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
    return pet.map((pet) => {
      return (
        <tr key={pet.id}>
          <td>{pet.name}</td>
          <td>{pet.formatted_address}</td>
          {/* <td>{ReactHtmlParser(pet.photos[0].html_attributions)}</td> */}
          {/* <td>
            {pet.photos[0].html_attributions.length > 0
              ? pet.photos[0].html_attributions
              : "Link not available"}
          </td> */}
        </tr>
      );
    });
  };

  return (
    <div>
      <div>
        <h2 className="pet_title">Pet Lodging Nearby</h2>
        <hr />
        <div className="petTable">
          <Table striped>
            <thead>
              <tr>
                <th>Name:</th>
                <th>Address:</th>
                <th>Link to Google Map Location:</th>
              </tr>
            </thead>
            <tbody>{pet.length > 0 ? petMapper() : "Loading"}</tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Pets;
