import { NavLink } from "react-router-dom";
import { FaHome, FaBox, FaPhone, FaInfoCircle } from "react-icons/fa";
import "../styles/bottomNav.css";

function BottomNav() {
  return (
    <nav className="bottom-nav">

      <NavLink to="/" className="bottom-item">
        <FaHome />
        <span>Home</span>
      </NavLink>

      <NavLink to="/products" className="bottom-item">
        <FaBox />
        <span>Products</span>
      </NavLink>

      <NavLink to="/contact" className="bottom-item">
        <FaPhone />
        <span>Contact</span>
      </NavLink>

      <NavLink to="/about" className="bottom-item">
        <FaInfoCircle />
        <span>About</span>
      </NavLink>

    </nav>
  );
}

export default BottomNav;