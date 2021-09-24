import React, { useState } from "react";
import "../App.css";
import "../helpers/environment";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  Button,
  ModalHeader,
  ModalBody,
} from "reactstrap";

const InventoryEdit = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const handleClose = () => setModal(!modal);

  const [editCategory, setEditCategory] = useState(
    props.inventoryToEdit.category
  );
  const [editName, setEditName] = useState(props.inventoryToEdit.name);
  const [editYear, setEditYear] = useState(props.inventoryToEdit.year);
  const [editModel, setEditModel] = useState(props.inventoryToEdit.model);
  const [editSerialNum, setEditSerialNum] = useState(
    props.inventoryToEdit.serial_number
  );
  const [editPicUrl, setEditPicUrl] = useState(props.inventoryToEdit.pic_url);
  const [editValue, setEditValue] = useState(props.inventoryToEdit.value);

  const inventoryUpdate = (e, inventory) => {
    e.preventDefault();
    fetch(`${APIURL}/inventory/update/${props.inventoryToEdit.id}`, {
      method: "PUT",
      body: JSON.stringify({
        inventory: {
          category: editCategory,
          name: editName,
          year: editYear,
          model: editModel,
          serial_number: editSerialNum,
          pic_url: editPicUrl,
          value: editValue,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    }).then((res) => {
      props.fetchInventory();
      props.editOff();
    });
  };

  return (
    <Modal isOpen={!modal} centered={true} toggle={toggle}>
      <ModalHeader className="font-titles">
        <h2>Inventory Items Edit</h2>
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={inventoryUpdate}>
          <FormGroup>
            <Label htmlFor="category">Edit Category:</Label>
            <Input
              type="select"
              name="category"
              value={editCategory}
              onChange={(e) => setEditCategory(e.target.value)}
            >
              <option value="Electronics">Electronics</option>
              <option value="Jewelry">Jewelry</option>
              <option value="Furs">Furs</option>
              <option value="Art">Art</option>
              <option value="Antiques">Antiques</option>
              <option value="Other/Misc">Other/Misc</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Edit Name:</Label>
            <Input
              name="name"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="year">Edit Year:</Label>
            <Input
              name="year"
              value={editYear}
              onChange={(e) => setEditYear(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="model">Edit Model:</Label>
            <Input
              name="model"
              value={editModel}
              onChange={(e) => setEditModel(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="serial_number">Edit Serial Number:</Label>
            <Input
              name="serial_number"
              value={editSerialNum}
              onChange={(e) => setEditSerialNum(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="value">Edit Item Value:</Label>
            <Input
              name="value"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="pic_url">Edit Picture URL:</Label>
            <Input
              name="pic_url"
              value={editPicUrl}
              onChange={(e) => setEditPicUrl(e.target.value)}
            />
          </FormGroup>
          <Button className="btn-pdf" type="submit" onClick={handleClose}>
            Click to Submit Changes
          </Button>{" "}
          <Button className="btn-cancel" closebutton="true">
            Cancel
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default InventoryEdit;
