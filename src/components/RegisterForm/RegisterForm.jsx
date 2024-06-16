import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegisterForm.module.css";
import { Field, Form, Formik } from "formik";
import { useId } from "react";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const init = { name: "", email: "", password: "" };
  const id = useId();
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
    >
      <Form>
        <label htmlFor={`${id}-name`} className={css.label}>
          Username
          <Field id={`${id}-name`} type="text" name="name" />
        </label>
        <label htmlFor={`${id}-email`} className={css.label}>
          Email
          <Field id={`${id}-email`} type="email" name="email" />
        </label>
        <label htmlFor={`${id}-password`} className={css.label}>
          Password
          <Field id={`${id}-password`} type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
