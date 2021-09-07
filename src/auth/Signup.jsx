import React, { useState } from "react";
import { Form, Label, Input, Button, FormGroup } from "reactstrap";

const Signup = (props) => {
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
      });
  };
  return (
    <div>
      <h1 className="signuptitle">Sign up </h1>
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
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            value={password}
          />
          <br></br>
          <br></br>
          <Button className="signupbutton" type="submit">
            Submit
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default Signup;
