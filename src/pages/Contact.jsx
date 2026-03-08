import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/contact.css";
import Companydet from "../components/Companydet"
function Contact() {
  const phone = "7373122980";
  const whatsapp = "917373122980";
  const email = "vmaautomation@gmail.com";

  return (
    <>
      <Navbar />

      <div className="contact-page">

        <div className="contact-banner">
          <h1>Contact Us</h1>
          <p>We are here to help you</p>
        </div>

        <div className="contact-cards">
          <a href={`tel:${phone}`} className="contact-card">
            <h3>📞 Call</h3>
            <p>{phone}</p>
          </a>

          <a
            href={`https://wa.me/${whatsapp}?text=Hello, I need more details.`}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <h3>💬 WhatsApp</h3>
            <p>Chat with us</p>
          </a>

          <a
            href={`mailto:${email}?subject=Product Inquiry`}
            className="contact-card"
          >
            <h3>📧 Email</h3>
            <p>{email}</p>
          </a>

          <a href={`sms:${phone}`} className="contact-card">
            <h3>📱 SMS</h3>
            <p>Send a message</p>
          </a>
        </div>

        <div className="company-info">
          <h2>Our Office</h2>
          <p>📍 Perundurai, Erode, Tamil Nadu</p>
          <p>📞 8778262206</p>
          <p>📧 vmaautomation@gmail.com</p>
        </div>

      </div>

      <Footer />
      <Companydet/>
    </>
  );
}

export default Contact;