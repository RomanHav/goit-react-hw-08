import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId, useState } from "react";
import { addContact } from "../../redux/contacts/operations.js";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import css from "./ContactForm.module.css";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  styled,
  TextField,
} from "@mui/material";
import { PersonAddAlt1Outlined } from "@mui/icons-material";

const ValidationTextField = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "#E0E3E7",
    borderWidth: 1,
    color: "#fff",
  },
  "& input:invalid + fieldset": {
    borderColor: "red",
    borderWidth: 1,
    color: "#fff",
  },
  "& input::placeholder + fieldset": {
    color: "#fff",
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 4,
    padding: "4px !important",
    color: "#fff",
  },
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(9, "Too short!")
      .max(14, "Too long!")
      .matches(/^[0-9]{3}-[0-9]{2}-[0-9]{2}$/, "Invalid number format")
      .required("Required"),
  });

  const initialValues = {
    id: "",
    name: "",
    number: "",
  };

  const onSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <Box>
      <Button onClick={openModal}>
        <PersonAddAlt1Outlined />
      </Button>
      <Dialog open={isOpen} onClose={closeModal}>
        <Box sx={{ backgroundColor: "#242424", color: "#fff" }}>
          <DialogTitle>{"Add contact"}</DialogTitle>
          <IconButton
            aria-label="close"
            onClick={closeModal}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "#fff",
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={FeedbackSchema}
            >
              <Form>
                <Box display="flex" flexDirection="column" gap={2} p={1}>
                  <label className={css.label} htmlFor={`${id}-name`}>
                    <Field
                      as={TextField}
                      required
                      type="text"
                      name="name"
                      variant={"outlined"}
                      id={`${id}-name`}
                      placeholder="Alex"
                      label="Name"
                    />

                    <ErrorMessage
                      className={css.error}
                      name="name"
                      component="span"
                    />
                  </label>

                  <label className={css.label} htmlFor={`${id}-number`}>
                    <Field
                      required
                      as={ValidationTextField}
                      type="tel"
                      name="number"
                      id={`${id}-number`}
                      label="Number"
                    />
                    <ErrorMessage
                      className={css.error}
                      name="number"
                      component="span"
                    />
                  </label>

                  <Button color="secondary" variant="contained" type="submit">
                    Add contact
                  </Button>
                </Box>
              </Form>
            </Formik>
          </DialogContent>
        </Box>
      </Dialog>
    </Box>
  );
}
