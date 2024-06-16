import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import { toast, Toaster } from "react-hot-toast";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { Box, Button } from "@mui/material";
export const LoginForm = () => {
  const dispatch = useDispatch();
  const init = { email: "", password: "" };
  const id = useId();
  const ContactSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required!"),
    password: Yup.string()
      .required("Required!")
      .min(8, "Password must be at least 8 characters!"),
  });
  const handleSubmit = (values, actions) => {
    if (values.email === "" || values.password === "") {
      toast("There is no email and password");
    }
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      }),
    )
      .unwrap()
      .then(() => {
        toast("Login success");
      })
      .catch(() => {
        toast("The email/password is wrong or user is not registered");
      });

    actions.resetForm();
  };

  return (
    <Box>
      <Formik
        initialValues={init}
        onSubmit={handleSubmit}
        autoComplete="off"
        validationSchema={ContactSchema}
      >
        <Form>
          <label htmlFor={`${id}-email`} className={css.label}>
            Email
            <Field type="email" id={`${id}-email`} name="email" />
            <ErrorMessage name="email" />
          </label>
          <label htmlFor={`${id}-password`} className={css.label}>
            Password
            <Field id={`${id}-password`} type="password" name="password" />
            <ErrorMessage name="password" />
          </label>
          <Button variant="contained" type="submit">
            Log In
          </Button>
        </Form>
      </Formik>
      <Toaster />
    </Box>
  );
};
