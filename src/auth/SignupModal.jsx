import React, { useRef, useState } from "react";
import { useFormik } from "formik"; //import Formik
import * as Yup from "yup";

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
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [name, setName] = useState("");

  //Formik Setup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(4, "Must be more than 4 characters")
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
    }),

    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      handleSignUp();
    },
  });

  // const validate = (values) => {
  //   const errors = {};
  //   if (!values.name) {
  //     errors.name = "Required";
  //   } else if (values.name.length > 3) {
  //     errors.name = "Must be 4 characters or more";
  //   }

  //   if (!values.email) {
  //     errors.email = "Required";
  //   } else if (
  //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  //   ) {
  //     errors.email = "Invalid email address";
  //   }
  //   return errors;
  // };

  //useState for Alert element
  const [visible, setVisible] = useState(false);

  let handleSignUp = (values) => {
    // event.preventDefault();
    fetch("http://localhost:3000/user/signup", {
      method: "POST",
      body: JSON.stringify({
        user: {
          email: formik.values.email,
          password: formik.values.password,
          name: formik.values.name,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
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
    //Make Alert for Errors Appear Dynamically
    suerrorMSG != "" ? setVisible(true) : setVisible(true);
  };
  return (
    <Modal isOpen={true} centered={true}>
      <ModalHeader className="d-flex justify-content-center">
        Signup
      </ModalHeader>
      <ModalBody>
        <Form onSubmit={formik.handleSubmit} className="signup">
          <FormGroup>
            <Label htmlFor="name">Name:</Label>
            <Input
              type="text"
              // onChange={(e) => setName(e.target.value)}
              onChange={formik.handleChange}
              name="name"
              value={formik.values.name}
            />
            <p style={{ color: "red" }}>
              {formik.touched.name && formik.errors.name ? (
                <div>{formik.errors.name}</div>
              ) : null}
            </p>
            <br></br>
            <br></br>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input
              onChange={formik.handleChange}
              // onChange={(e) => setEmail(e.target.value)}
              name="email"
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <p style={{ color: "red" }}>
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </p>
            <br></br>
            <br></br>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password:</Label>
            <Input
              input
              type="password"
              // onChange={(e) => setPassword(e.target.value)}
              onChange={formik.handleChange}
              name="password"
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <p style={{ color: "red" }}>
              {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </p>
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
            </Alert>
          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default SignupModal;
