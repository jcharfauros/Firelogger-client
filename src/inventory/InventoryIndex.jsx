import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import InventoryCreate from "./InventoryCreate";
import InventoryTable from "./InventoryTable";
import InventoryEdit from "./InventoryEdit";
import InventoryPDF from "./InventoryPDF";

const InventoryIndex = (props) => {
  const [inventory, setInventory] = useState([]);
  const [editActive, setEditActive] = useState(false);
  const [inventoryToEdit, setInventoryToEdit] = useState({});

  const fetchInventory = () => {
    fetch(`${APIURL}/inventory/`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((inventoryData) => {
        setInventory(inventoryData);
        console.log(inventoryData);
      });
  };

  const editInventory = (inventory) => {
    setInventoryToEdit(inventory);
    console.log(inventory);
  };

  const editOn = () => {
    setEditActive(true);
  };

  const editOff = () => {
    setEditActive(false);
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  return (
    <Container fluid={true}>
      {/* <Row>       
        <Col xs='4'>
      <Row>
        <Col xs="4">
          <InventoryCreate
            fetchInventory={fetchInventory}
            token={props.token}
          />
        </Col>
        <Col xs="4">
          <InventoryPDF />
        </Col>
      </Row> */}
      <Row>
        <Col>
          <InventoryTable
            inventory={inventory}
            editInventory={editInventory}
            editOn={editOn}
            fetchInventory={fetchInventory}
            token={props.token}
          />
        </Col>
        {editActive ? (
          <InventoryEdit
            inventoryToEdit={inventoryToEdit}
            editOff={editOff}
            token={props.token}
            fetchInventory={fetchInventory}
          />
        ) : (
          <></>
        )}
      </Row>
    </Container>
  );
};
export default InventoryIndex;
