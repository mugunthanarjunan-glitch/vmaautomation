import "../styles/contactCTA.css";
import { FaWhatsapp , FaPhone } from "react-icons/fa";

function ContactCTA() {
  const phone = "7373122980";

  const whatsappLink =
    "https://wa.me/917373122980?text=Hello, I need more details.";

  return (
    <div className="cta-section">
      <h2>Need Industrial Automation Products?</h2>
      <p>Contact us today for best pricing and technical support.</p>

      <div className="cta-buttons">
        <a href={`tel:${phone}`} className="cta-call">
          Call Now <FaPhone/> 
        </a>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="cta-whatsapp"
        >
          <FaWhatsapp/> WhatsApp
        </a>
      </div>
    </div>
  );
}

export default ContactCTA;