import "../styles/floatingWhatsApp.css";
import { FaWhatsapp } from "react-icons/fa";

function FloatingWhatsApp() {
  const phoneNumber = "918778262206";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=Hello, I need more details.`}
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp"
    >
      <FaWhatsapp/>
    </a>
  );
}

export default FloatingWhatsApp;