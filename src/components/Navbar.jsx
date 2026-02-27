import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">VMA Automation</Link>
        </div>

        <div className="desktop-menu">
          <Link to="/" className={isActive("/") ? "active" : ""}>Home</Link>
          <Link to="/products" className={isActive("/products") ? "active" : ""}>Products</Link>
          <Link to="/about" className={isActive("/about") ? "active" : ""}>About</Link>
          <Link to="/contact" className={isActive("/contact") ? "active" : ""}>Contact</Link>
        </div>

        <div className="menu-btn" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setOpen(false)}>Products</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;