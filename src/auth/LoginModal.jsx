import React, { useState } from "react";
import { useFormik } from "formik"; //import Formik
import * as Yup from "yup";

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
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [errorMsg, seterrorMSG] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Please Enter your password"),
    }),

    onSubmit: (values) => {
      handleLogin();
    },
  });

  //for Error Message Alert Element
  const [visible, setVisible] = useState(false);

  let handleLogin = (event) => {
    // event.preventDefault();
    fetch("http://localhost:3000/user/login", {
      method: "POST",
      body: JSON.stringify({
        user: { email: formik.values.email, password: formik.values.password },
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
        <Form className="login" onSubmit={formik.handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email: &nbsp;</Label>
            <Input
              type="email"
              // onChange={(e) => setEmail(e.target.value)}
              onChange={formik.handleChange}
              name="email"
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <p style={{ color: "red" }}>
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </p>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password"> Password: &nbsp;</Label>
            <Input
              input
              type="password"
              onChange={formik.handleChange}
              // onChange={(e) => setPassword(e.target.value)}
              name="password"
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <p style={{ color: "red" }}>
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </p>
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
