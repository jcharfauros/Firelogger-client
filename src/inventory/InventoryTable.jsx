import React from "react";
import { Table, Button, Container, Row, Col } from "reactstrap";
import "../App.css";
import ExportPDF from './InventoryPDF';
import InventoryCreate from './InventoryCreate';

const InventoryTable = (props) => {
  const deleteInventory = (inventory) => {
    fetch(`${APIURL}/inventory/delete/${inventory.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => props.fetchInventory());
  };
  console.log(props.inventory);

  const inventoryMapper = () => {
    return props.inventory.map((inventory, index) => {
      return (
        <tr key={index}>
          <th scope="row">{inventory.id}</th>
          <td>{inventory.category}</td>
          <td>{inventory.name}</td>
          <td>{inventory.year}</td>
          <td>{inventory.model}</td>
          <td>{inventory.serial_number}</td>
          <td>{inventory.value}</td>
          <td>
            <img
              src={inventory.pic_url}
              style={{ width: "200px" }}
              alt="inventory item IMG"
            />{" "}
          </td>
          <td>
            <Button
              className="btn-update"
              color="black"
              onClick={() => {
                props.editInventory(inventory);
                props.editOn();
              }}
            >
              Update
            </Button>
            <Button
              className="btn-delete"
              color="black"
              onClick={() => {
                deleteInventory(inventory);
              }}
            >
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };

  return (
    <Container>
      <Row className='inventory-padding'>
        <Col md='auto'>
          <h1 className="font-titles">Inventory Item List</h1>
        </Col>
        <Col md='auto'>
          <InventoryCreate 
           InventoryTable={InventoryTable}
           token={props.token}/>
        </Col >
        <Col md='auto'>
          <ExportPDF />
        </Col>
          <hr />        
      </Row>
      <Table id="inventoryTable" borderless hover>
        <thead>
          <tr className="font-table">
            <th>Item#</th>
            <th>Category</th>
            <th>Name</th>
            <th>Year</th>
            <th>Model</th>
            <th>SN#</th>
            <th>Value</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>{inventoryMapper()}</tbody>
      </Table>
    </Container>
  );
};

export default InventoryTable;
