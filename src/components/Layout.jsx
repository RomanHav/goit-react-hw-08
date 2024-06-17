import { Suspense } from "react";

import { AppBar } from "./AppBar/AppBar.jsx";
import { Box } from "@mui/material";

export default function Layout({ children }) {
  return (
    <div>
      <AppBar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="90vh"
        width="100%"
      >
        <Suspense fallback={null}>{children}</Suspense>
      </Box>
    </div>
  );
}
