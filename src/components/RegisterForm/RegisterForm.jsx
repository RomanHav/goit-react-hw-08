import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegisterForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { useId } from "react";
import { Box, Button } from "@mui/material";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const init = { name: "", email: "", password: "" };
  const id = useId();
  const ContactSchema = Yup.object().shape({
    name: Yup.string().required("Required!"),
    email: Yup.string().email("Invalid email address").required("Required!"),
    password: Yup.string()
      .required("Required!")
      .min(8, "Password must be at least 8 characters!"),
  });
  const handleSubmit = (values, action) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      }),
    );

    action.resetForm();
  };

  return (
    <Formik
      initialValues={init}
      className={css.form}
      onSubmit={handleSubmit}
      autoComplete="off"
      validationSchema={ContactSchema}
    >
      <Form>
        <Box
          display="flex"
          flexDirection="column"
          p={5}
          gap={3}
          border="1px solid #fff"
          borderRadius={3}
        >
          <label htmlFor={`${id}-name`} className={css.label}>
            Username
            <Field
              id={`${id}-name`}
              type="text"
              name="name"
              className={css.field}
            />
            <span className={css.error}>
              <ErrorMessage name="name" />
            </span>
          </label>
          <label htmlFor={`${id}-email`} className={css.label}>
            Email
            <Field
              id={`${id}-email`}
              type="email"
              name="email"
              className={css.field}
            />
            <span className={css.error}>
              <ErrorMessage name="email" />
            </span>
          </label>
          <label htmlFor={`${id}-password`} className={css.label}>
            Password
            <Field
              id={`${id}-password`}
              type="password"
              name="password"
              className={css.field}
            />
            <span className={css.error}>
              <ErrorMessage name="password" />
            </span>
          </label>
          <Button color="secondary" variant="contained" type="submit">
            Register
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};
