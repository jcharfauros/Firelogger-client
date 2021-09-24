import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import "../App.css";

const InventoryPDF = (props) => {
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

  return (
    <Container fluid={true}>
      <Row>
        <Col sm={{ size: "auto", offset: 9 }}>
          <Button className="btn-pdf" active onClick={handlePDF}>
            Export Inventory List to PDF
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default InventoryPDF;
