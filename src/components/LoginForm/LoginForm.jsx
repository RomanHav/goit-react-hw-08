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
          <Box
            display="flex"
            flexDirection="column"
            borderRadius={3}
            border="1px solid #fff"
            p={5}
            gap={3}
          >
            <label htmlFor={`${id}-email`} className={css.label}>
              <h3>Email</h3>
              <Field
                type="email"
                id={`${id}-email`}
                name="email"
                className={css.field}
              />
              <ErrorMessage
                className={css.error}
                name="email"
                component="span"
              />
            </label>
            <label htmlFor={`${id}-password`} className={css.label}>
              <h3>Password</h3>
              <Field
                id={`${id}-password`}
                className={css.field}
                type="password"
                name="password"
              />
              <ErrorMessage
                className={css.error}
                name="password"
                component="span"
              />
            </label>
            <Button color="secondary" variant="contained" type="submit">
              Log In
            </Button>
          </Box>
        </Form>
      </Formik>
      <Toaster />
    </Box>
  );
};
