import React, { useState } from "react";
import { Form, Label, Input, Button, FormGroup } from "reactstrap";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        props.updateToken(data.sessionToken);
      });
  };

  return (
    <div>
      <h1> Login</h1>
      <Form className="login" onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email: &nbsp;</Label>
          <Input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            value={email}
          />
        </FormGroup>

        <br></br>

        <FormGroup>
          <Label htmlFor="password"> Password: &nbsp;</Label>
          <Input
            input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            value={password}
          />
        </FormGroup>
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default Login;
