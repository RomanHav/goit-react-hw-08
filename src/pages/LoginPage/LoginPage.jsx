import DocumentTitle from "../../components/DocumentTitle.jsx";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { Box } from "@mui/material";

export default function LoginPage() {
  return (
    <Box>
      <DocumentTitle>Login</DocumentTitle>
      <LoginForm />
    </Box>
  );
}
