import React, { useEffect, useState } from "react";
import { Row, Container, Table, Button } from "reactstrap";
import ReactHtmlParser from "react-html-parser";

const Hotels = (props) => {
  const [hotel, setHotel] = useState({});

  let hotelfetch = (e) => {
    fetch("http://localhost:3000/hotels", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setHotel(data.results);
        // console.log(data.results);
      });
  };

  useEffect(() => {
    hotelfetch();
  }, []);

  const hotelMapper = () => {
    return hotel.map((hotel) => {
      return (
        <tr key={hotel.id}>
          <td>{hotel.name}</td>
          <td>{hotel.formatted_address}</td>
          <td>
            {ReactHtmlParser(hotel.photos[0].html_attributions)}
            {/* <a
              href={ReactHtmlParser(hotel.photos[0].html_attributions)}
              target="_blank"
            >
              <button>Google Map Link</button>
            </a> */}
            {/* <a
              id="googleLink"
              href={ReactHtmlParser(hotel.photos[0].html_attributions)}
              target="_blank"
            >
              Google Map Link
            </a> */}
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <div>
        <h2 className="hotel_title">Hotels Nearby</h2>
        <hr />
        <div className="hotelTable">
          <Table striped>
            <thead>
              <tr>
                <th>Name:</th>
                <th>Address:</th>
                <th>Link to Google Map Location:</th>
              </tr>
            </thead>
            <tbody>{hotel.length > 0 ? hotelMapper() : "Loading"}</tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
