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
  Alert,
} from "reactstrap";

const LoginModal = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, seterrorMSG] = useState("");

  //for Error Message Alert Element
  let [visible, setVisible] = useState(true);

  let handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/user/login", {
      method: "POST",
      body: JSON.stringify({
        user: { email: email, password: password },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.error);
        if (
          data.error ===
          "Login failed - Please check email and password and try again"
        ) {
          seterrorMSG(data.error);
          // console.log("Email or password is wrong so token is Undefined");
        } else if (data.error === "User does not exist.") {
          seterrorMSG(data.error);
          // console.log("Account not found, please try again!");
        } else {
          props.updateToken(data.sessionToken);
          console.log("Email & Password combo checkout!");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Modal isOpen={true} centered={true}>
      <ModalHeader className="d-flex justify-content-center">Login</ModalHeader>
      <ModalBody>
        <Form className="login" onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email: &nbsp;</Label>
            <Input
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              value={email}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password"> Password: &nbsp;</Label>
            <Input
              input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              value={password}
            />
          </FormGroup>
          <br />
          <div className="d-flex justify-content-between">
            <Button color="primary" type="submit">
              Login
            </Button>
            <Button color="danger" onClick={props.loginModalOFF}>
              Cancel
            </Button>
          </div>
          <br />
          <Alert color="danger" isOpen={visible}>
            {errorMsg}
            {/* {(errorMsg = "" ? setVisible(false) : setVisible(true))} */}
          </Alert>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default LoginModal;
