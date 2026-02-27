import { useNavigate } from "react-router-dom";
import "../styles/categories.css";

function Categories() {
  const navigate = useNavigate();

  const categories = [
    "PLC",
    "HMI",
    "VFD",
    "Sensors",
    "Panels",
    "Cables",
    "Relays",
    "SMPS"
  ];

  return (
    <div className="categories-section">
      <h3 className="section-title">Shop by Category</h3>

      <div className="categories-scroll">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => navigate("/products")}
          >
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;