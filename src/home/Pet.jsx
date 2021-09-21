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
                <button className="resources-button"> Google Map Link</button>
              </a>
            ) : (
              "Link not available"
            )}
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <div>
        <h2 className="pet_title">
          Pet Lodging Nearby{" "}
          <img
            src={`https://static-00.iconduck.com/assets.00/paw-prints-emoji-443x512-6ata4j5m.png`}
            className="temp-icon"
            alt="temp icon"
          />{" "}
        </h2>
        <hr />
        <div className="petTable">
          <Table responsive striped>
            <thead>
              <tr>
                <th scope="row">Name:</th>
                <th scope="row">Address:</th>
                <th scope="row">Link to Google Map Location:</th>
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
