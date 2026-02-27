import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NotFound() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>404 - Page Not Found</h2>
      </div>
      <Footer />
    </>
  );
}

export default NotFound;