import "../styles/footer.css";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import CompanyLogoFooter from "../logo-images/companylogo-footer.png";
function Footer() {
  const phone = "7373122980";
  const whatsappLink =
    "https://wa.me/917373122980?text=Hello, I need more details.";
  return (
    <>
    <footer className="footer">
      <div className="main-cont">
        <div className="footer-logo">
          <img src={CompanyLogoFooter} alt="" />
        </div>
        <div>
          <h4>VMA Automation</h4>
          <p>Industrial Automation & Electrical Solutions</p>
          <p>Perundurai, Erode, Tamil Nadu</p>
          <p>7373122980</p>
          <p>vmaautomation@gmail.com</p>
        </div>
      </div>

      <div>
        <h4>Contact Us</h4>
        <div className="logo-cont">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
            >
            <FaWhatsapp />
          </a>
          <a href={`tel:${phone}`} className="cta-call1">
            <FaPhone />
          </a>
        </div>
      </div>

      
    </footer>
            </>
  );
}

export default Footer;
