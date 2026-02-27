import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/about.css";

function About() {
  return (
    <>
      <Navbar />

      <div className="about-page">

        <div className="about-banner">
          <h1>About VMA Automation</h1>
          <p>Industrial Automation & Electrical Solutions</p>
        </div>

        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            VMA Automation is a trusted supplier of Industrial Automation
            Products including PLC, HMI, VFD Drives, Control Panels,
            Sensors and Electrical Components.
            We deliver reliable automation solutions for various industries.
          </p>
        </div>

        <div className="vision-mission">
          <div className="vm-card">
            <h3>Our Vision</h3>
            <p>
              To become a leading automation solution provider
              delivering innovative and reliable industrial products.
            </p>
          </div>

          <div className="vm-card">
            <h3>Our Mission</h3>
            <p>
              To supply genuine quality products with excellent
              customer support and technical service.
            </p>
          </div>
        </div>

        <div className="stats-section">
          <div className="stat-box">
            <h3>50+</h3>
            <p>Products</p>
          </div>
          <div className="stat-box">
            <h3>100+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-box">
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-box">
            <h3>24/7</h3>
            <p>Support</p>
          </div>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default About;