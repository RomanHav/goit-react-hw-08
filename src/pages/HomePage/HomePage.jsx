import DocumentTitle from "../../components/DocumentTitle.jsx";
import { Box } from "@mui/material";

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <Box>
        <h1 style={{ textAlign: "center" }}>
          The best contact list editor{" "}
          <span role="img" aria-label="Greeting icon">
            ☎️
          </span>
        </h1>
      </Box>
    </>
  );
}
