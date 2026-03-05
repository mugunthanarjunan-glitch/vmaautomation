import "../styles/contactCTA.css";
import { FaWhatsapp , FaPhone } from "react-icons/fa";

function ContactCTA() {
  const phone = "8778262206";

  const whatsappLink =
    "https://wa.me/918778262206?text=Hello, I need more details.";

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