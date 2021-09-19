import React, { useState } from "react";
import {
  Alert,
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
  const [suerrorMSG, suSeterrorMSG] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  let [visible, setVisible] = useState(true);

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
        console.log(data);
        if (data.message === "User successfully created") {
          props.updateToken(data.sessionToken);
          console.log("User successfully created");
        } else {
          suSeterrorMSG(
            "user account already exists please try another email or try signing in under login..."
          );
        }
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
              type="text"
              required
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
              required
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
              required
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
            <br />
            <Alert color="danger" isOpen={visible}>
              {suerrorMSG}
              {/* {(errorMsg = "" ? setVisible(false) : setVisible(true))} */}
            </Alert>
          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default SignupModal;
