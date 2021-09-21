import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
const InventoryCreate = (props) => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [model, setModel] = useState("");
  const [serial_number, setSerial_Number] = useState("");
  const [pic_url, setPic_Url] = useState("");
  const [value, setValue] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const handleClose = () => setModal(false);
  let UploadImage = async (e) => {
    let files = e.target.files;
    let data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "FireLogger");
    setLoading(true);
    let res = await fetch(
      "https://api.cloudinary.com/v1_1/do0viwio7/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    let File = await res.json();
    setImage(File.secure_url);
    setLoading(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/inventory/create", {
      method: "POST",
      body: JSON.stringify({
        inventory: {
          category: category,
          name: name,
          year: year,
          model: model,
          serial_number: serial_number,
          value: value,
          pic_url: image,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((inventoryData) => {
        console.log(inventoryData);
        setCategory("");
        setName("");
        setYear("");
        setModel("");
        setSerial_Number("");
        setValue("");
        setPic_Url("");
        props.fetchInventory();
      });
  };
  return (
    <div>
      <Button
        variant="primary"
        onClick={toggle}
        className="add-inventory-button"
      >
        Add item to Inventory
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <h3>Add item to Inventory</h3>
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="category" />
              <Input
                type="select"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Category of Item</option>
                <option value="electronics">Electronics</option>
                <option value="jewelry">Jewelry</option>
                <option value="furs">Furs</option>
                <option value="art">Art</option>
                <option value="antiques">Antiques</option>
                <option value="other/misc">Other/Misc</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name" />
              <Input
                name="name"
                placeholder="Name of Item"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="year" />
              <Input
                name="year"
                placeholder="Year Purchased"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="model" />
              <Input
                name="model"
                placeholder="Model of Item"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="serial_number" />
              <Input
                name="serial_number"
                placeholder="Serial Number"
                value={serial_number}
                onChange={(e) => setSerial_Number(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="value" />
              <Input
                name="value"
                placeholder="Value of Item"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="pic_url" />
              <h6>Upload Image of Item</h6>
              <Input
                type="file"
                name="file"
                placeholder="Upload Image here"
                onChange={UploadImage}
              />
              <br />
              {loading ? (
                <h6>Loading...</h6>
              ) : (
                <img src={image} style={{ width: "95px" }} />
              )}
            </FormGroup>{" "}
            <br />
            <Button type="submit" onClick={handleClose}>
              Click to Add Item
            </Button>{" "}
            {/* <Button color="secondary" onClick={toggle}>
              Cancel
            </Button> */}
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default InventoryCreate;
