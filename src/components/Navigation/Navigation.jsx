import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import { Button, Stack } from "@mui/material";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Stack direction="row" spacing={2}>
      <NavLink className={css.link} to="/">
        <Button variant="text">Home</Button>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          <Button variant="text">Contacts</Button>
        </NavLink>
      )}
    </Stack>
  );
};
