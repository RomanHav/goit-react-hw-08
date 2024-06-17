import { useDispatch, useSelector } from "react-redux";

import { selectUser } from "../../redux/auth/selectors";
// import css from "./UserMenu.module.css";
import { logOut } from "../../redux/auth/operations";
import { Box, Button } from "@mui/material";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <p>
        Welcome,{" "}
        <span style={{ fontWeight: 700, color: "#ff44be" }}>{user.name}</span>
      </p>
      <Button
        variant="outlined"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </Button>
    </Box>
  );
};
