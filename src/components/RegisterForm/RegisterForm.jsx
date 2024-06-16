import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegisterForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { useId } from "react";

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
        <label htmlFor={`${id}-name`} className={css.label}>
          Username
          <Field id={`${id}-name`} type="text" name="name" />
          <ErrorMessage name="name" />
        </label>
        <label htmlFor={`${id}-email`} className={css.label}>
          Email
          <Field id={`${id}-email`} type="email" name="email" />
          <ErrorMessage name="email" />
        </label>
        <label htmlFor={`${id}-password`} className={css.label}>
          Password
          <Field id={`${id}-password`} type="password" name="password" />
          <ErrorMessage name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
