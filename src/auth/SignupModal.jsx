import React, { useState } from "react";
import {
  Form,
  Label,
  Input,
  Button,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";

const SignupModal = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        user: { email: email, password: password, name: name },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        props.updateToken(data.sessionToken);
      })
      .catch((error) => console.log(error));
  };
  return (
    <Modal isOpen={true} centered={true}>
      <ModalHeader className="d-flex justify-content-between">
        Signup
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit} className="signup">
          <FormGroup>
            <Label htmlFor="name">Name:&nbsp;</Label>
            <Input
              onChange={(e) => setName(e.target.value)}
              name="name"
              value={name}
            />
            <br></br>
            <br></br>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email: &nbsp;</Label>
            <Input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              value={email}
            />
            <br></br>
            <br></br>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password:&nbsp;</Label>
            <Input
              input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              value={password}
            />
            <br></br>
            <br></br>
            <div className="d-flex justify-content-between">
              <Button className="signupbutton" type="submit">
                Submit
              </Button>
              <Button color="danger" onClick={props.signupModalOFF}>
                Exit
              </Button>
            </div>
          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default SignupModal;
