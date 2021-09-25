import React, { useEffect, useState, Spinner } from "react";
import { Row, Container, Table, Button, Col } from "reactstrap";
import APIURL from "../helpers/environment";
const Hotels = (props) => {
  const [hotel, setHotel] = useState({});

  let hotelfetch = (e) => {
    fetch(`${APIURL}/hotels`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setHotel(data.results);
        // console.log(data.results);
      })
      .catch((error) => console.log(error)); //added basic catch! -Marcus
  };

  useEffect(() => {
    hotelfetch();
  }, []);

  const hotelMapper = () => {
    return hotel.slice(0, 10).map((hotel) => {
      return (
        <tr key={hotel.id} className="hotel-header">
          <td>{hotel.name}</td>
          <td>{hotel.formatted_address}</td>
          <td>
            <a
              href={`https://maps.google.com/?q=${hotel.formatted_address}`}
              target="_blank"
            >
              <button className="btn-resource" color="black">
                Click for Location
              </button>
            </a>
          </td>
        </tr>
      );
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="font-titles">Hotels Nearby </h1>
          <hr />
        </Col>
      </Row>
      <Row>
        <Table responsive borderless hover>
          <thead>
            <tr className="font-table">
              <th scope="row">Name:</th>
              <th scope="row">Address:</th>
              <th scope="row">Google Map Link:</th>
            </tr>
          </thead>
          <tbody>{hotel.length > 0 ? hotelMapper() : "Loading"}</tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default Hotels;
