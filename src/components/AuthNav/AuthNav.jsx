import { NavLink } from "react-router-dom";
import { Box, Button, Stack } from "@mui/material";

export const AuthNav = () => {
  return (
    <Box color="red">
      <Stack direction="row" spacing={2}>
        <NavLink to="/register">
          <Button variant="text">Register</Button>
        </NavLink>
        <NavLink to="/login">
          <Button variant="text">Log In</Button>
        </NavLink>
      </Stack>
    </Box>
  );
};
