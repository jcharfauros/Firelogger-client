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
  let [userdisplayName, setUserDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, seterrorMSG] = useState("");

  //for Error Message Alert Element
  const [visible, setVisible] = useState(false);

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
        if (
          data.error ===
          "Login failed - Please check email and password and try again"
        ) {
          seterrorMSG(data.error);
        } else if (data.error === "User does not exist.") {
          seterrorMSG(data.error);
        } else {
          props.updateToken(data.sessionToken);
          console.log(`Login Successful! Welcome ${userdisplayName}`);
        }
      })
      .catch((error) => console.log(error));

    //make Alert for Errors Appear mor dynamic
    errorMsg != "" ? setVisible(true) : setVisible(true);
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
          </Alert>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default LoginModal;
