import React, { useState } from "react";
import { useFormik } from "formik"; //import Formik
import * as Yup from "yup";
import "../App.css";
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
  // const [category, setCategory] = useState("");
  // const [name, setName] = useState("");
  // const [year, setYear] = useState("");
  // const [model, setModel] = useState("");
  // const [serial_number, setSerial_Number] = useState("");
  // const [pic_url, setPic_Url] = useState("");
  // const [value, setValue] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const handleClose = () => setModal(false);

  const formik = useFormik({
    initialValues: {
      category: "",
      name: "",
      year: "",
      model: "",
      serial_number: "",
      value: "",
      // image: "",
    },
    validationSchema: Yup.object({
      category: Yup.string().required("Required"),
      name: Yup.string().required("Required"),
      year: Yup.string().required("Required"),
      model: Yup.string().required("Required"),
      serial_number: Yup.string().required("Required"),
      value: Yup.string().required("Required"),
      // pic_url: Yup.string(),
    }),

    onSubmit: (values) => {
      console.log("hello");
      postInventory();
    },
  });

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
  const postInventory = (e) => {
    // e.preventDefault();
    fetch("http://localhost:3000/inventory/create", {
      method: "POST",
      body: JSON.stringify({
        inventory: {
          category: formik.values.category,
          name: formik.values.name,
          year: formik.values.year,
          model: formik.values.model,
          serial_number: formik.values.serial_number,
          value: formik.values.value,
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
        window.location.href = "/";
        // // props.fetchInventory();
        // handleClose();
      });
  };

  return (
    <div>
      <Button variant="primary" onClick={toggle} className="btn-pdf">
        Add item to Inventory
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>
          <h3>Add item to Inventory</h3>
        </ModalHeader>
        <ModalBody>
          {/* should be handle submit here around time 17min*/}
          <Form onSubmit={formik.handleSubmit}>
            <FormGroup>
              <Label htmlFor="category" />
              <Input
                type="select"
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option>Category of Item</option>
                <option value="electronics">Electronics</option>
                <option value="jewelry">Jewelry</option>
                <option value="furs">Furs</option>
                <option value="art">Art</option>
                <option value="antiques">Antiques</option>
                <option value="other/misc">Other/Misc</option>
              </Input>
              <p style={{ color: "red" }}>
                {formik.touched.category && formik.errors.category ? (
                  <div>{formik.errors.category}</div>
                ) : null}
              </p>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="name" />
              <Input
                name="name"
                placeholder="Name of Item"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p style={{ color: "red" }}>
                {formik.touched.name && formik.errors.name ? (
                  <div>{formik.errors.name}</div>
                ) : null}
              </p>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="year" />
              <Input
                name="year"
                placeholder="Year Purchased"
                value={formik.values.year}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p style={{ color: "red" }}>
                {formik.touched.year && formik.errors.year ? (
                  <div>{formik.errors.year}</div>
                ) : null}
              </p>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="model" />
              <Input
                name="model"
                placeholder="Model of Item"
                value={formik.values.model}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p style={{ color: "red" }}>
                {formik.touched.model && formik.errors.model ? (
                  <div>{formik.errors.model}</div>
                ) : null}
              </p>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="serial_number" />
              <Input
                name="serial_number"
                placeholder="Serial Number"
                value={formik.values.serial_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p style={{ color: "red" }}>
                {formik.touched.serial_number && formik.errors.serial_number ? (
                  <div>{formik.errors.serial_number}</div>
                ) : null}
              </p>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="value" />
              <Input
                name="value"
                placeholder="Value of Item"
                value={formik.values.value}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <p style={{ color: "red" }}>
                {formik.touched.value && formik.errors.value ? (
                  <div>{formik.errors.value}</div>
                ) : null}
              </p>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="pic_url" />
              <h6>Upload Image of Item</h6>
              <Input
                type="file"
                name="file"
                placeholder="Upload Image here"
                onChange={UploadImage}
                // onChange={handleChange}
                // onBlur={formik.handleBlur}
              />
              <br />
              {loading ? (
                <h6>Loading...</h6>
              ) : (
                <img src={image} style={{ width: "95px" }} />
              )}
            </FormGroup>{" "}
            <br />
            <Button type="submit">Click to Add Item</Button>{" "}
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default InventoryCreate;
