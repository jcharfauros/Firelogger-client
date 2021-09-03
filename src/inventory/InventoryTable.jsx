import React from "react";
import { Table, Button, Container } from "reactstrap";

const InventoryTable = (props) => {
  const deleteInventory = (workout) => {
    fetch(`http://localhost:3000/inventory/delete/${inventory.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then(() => props.fetchInventory());
  };
  console.log(props);

  return (
    <Container>
      <h3>Inventory Item List</h3>
      <hr />
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>category</th>
            <th>name</th>
            <th>year</th>
            <th>model</th>
            <th>SN#</th>
            <th>picture</th>
            <th>value</th>
          </tr>
        </thead>
        {/* <tbody>{inventoryMapper()}</tbody> */}
      </Table>
    </Container>
  );
};

export default InventoryTable;
