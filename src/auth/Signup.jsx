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
      <h1>Sign up</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            onChange={(e) => setName(e.target.value)}
            name="name"
            value={name}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            value={email}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            value={password}
          />
        </FormGroup>
        <Button type="submit">Sign up</Button>
      </Form>
    </div>
  );
};

export default Signup;
