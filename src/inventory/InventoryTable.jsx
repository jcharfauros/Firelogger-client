import React from "react";
import { Table, Button, Container } from "reactstrap";

const InventoryTable = (props) => {
  const deleteInventory = (inventory) => {
    fetch(`http://localhost:3000/inventory/delete/${inventory.id}`, {
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
          <td><img src={inventory.pic_url} style={{ width: "300px" }} /></td>
          <td>{inventory.value}</td>
          <td>
            <Button
              outline
              color="warning"
              size='sm'
              onClick={() => {
                props.editInventory(inventory);
                props.editOn();
              }}
            >
              Update
            </Button>
            <Button
              outline
              color="danger"
              size='sm'
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
      <h3>Inventory Item List</h3>
      <hr />
      <Table striped>
        <thead>
          <tr>
            <th>item#</th>
            <th>category</th>
            <th>name</th>
            <th>year</th>
            <th>model</th>
            <th>SN#</th>
            <th>picture</th>
            <th>value</th>
          </tr>
        </thead>
        <tbody>{inventoryMapper()}</tbody>
      </Table>
    </Container>
  );
};

export default InventoryTable;
