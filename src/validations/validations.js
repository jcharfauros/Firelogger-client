import * as yup from "yup";

export const userSignUpSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required,
  password: yup.string().min(8).max(16).required(),
});
