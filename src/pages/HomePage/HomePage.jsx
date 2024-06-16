import DocumentTitle from "../../DocumentTitle";

const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: "center",
  },
};

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div style={styles.container}>
        <h1 style={styles.title}>
          The best contact list editor
          <span role="img" aria-label="Greeting icon">
            😍😍😜🧕🏿
          </span>
        </h1>
      </div>
    </>
  );
}
