import { Suspense } from "react";

import { AppBar } from "./components/AppBar/AppBar";

export default function Layout({ children }) {
  return (
    <div>
      <AppBar style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }} />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
}
