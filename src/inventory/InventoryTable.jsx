import React from "react";
import { Table, Button, Container } from "reactstrap";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import "../App.css";

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

  //Parses User's Table & Generates PDF Report of User's current Inventory
  const handlePDF = (e) => {
    const doc = new jsPDF("landscape");
    doc.autoTable({
      html: "#inventoryTable",
      bodyStyles: { minCellHeight: 15 },
      didDrawCell: function (data) {
        if (data.column.index === 7 && data.cell.section === "body") {
          var td = data.cell.raw;
          var img = td.getElementsByTagName("img")[0];
          doc.addImage(
            img.src,
            "JPEG",
            data.cell.x + 2,
            data.cell.y + 2,
            10,
            10
          );
        }
      },
    });
    doc.save("My Inventory.pdf");
  };

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
    <Container className="inventory-table-container">
      <h1 className="font-titles">Inventory Item List</h1>
      <Button className="btn-pdf" active onClick={handlePDF}>
        Export Inventory List to PDF
      </Button>

      <hr />
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
            {/* <th></th> */}
          </tr>
        </thead>
        <tbody>{inventoryMapper()}</tbody>
      </Table>
    </Container>
  );
};

export default InventoryTable;
