import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";

const InventoryCreate = (props) => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [model, setModel] = useState("");
  const [serial_number, setSerial_Number] = useState("");
  const [pic_url, setPic_Url] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/create`, {
      method: "POST",
      body: JSON.stringify({
        inventory: {
          category: category,
          name: name,
          year: year,
          model: model,
          serial_number: serial_number,
          pic_url: pic_url,
          value: value,
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
        setPic_Url("");
        setValue("");
        props.fetchInventory();
      });
  };

  return (
    <Container>
      <h3>Add new item to Inventory</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="category" />
          <Input
            type="select"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option></option>
            <option value="electronics">electronics</option>
            <option value="jewelry">jewelry</option>
            <option value="furs">furs</option>
            <option value="art">art</option>
            <option value="antiques">antiques</option>
            <option value="other/misc">other/misc</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="name" />
          <Input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="year" />
          <Input
            name="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="model" />
          <Input
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="serial_number" />
          <Input
            name="serial_number"
            value={serial_number}
            onChange={(e) => setSerial_Number(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="pic_url" />
          <Input
            name="pic_url"
            value={pic_url}
            onChange={(e) => setPic_Url(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="value" />
          <Input
            name="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Click to Add Item</Button>
      </Form>
    </Container>
  );
};

export default InventoryCreate;
