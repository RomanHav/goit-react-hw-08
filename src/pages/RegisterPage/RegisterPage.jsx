import DocumentTitle from "../../components/DocumentTitle.jsx";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { Box } from "@mui/material";

export default function RegisterPage() {
  return (
    <Box>
      <DocumentTitle>Registration</DocumentTitle>
      <RegisterForm />
    </Box>
  );
}
