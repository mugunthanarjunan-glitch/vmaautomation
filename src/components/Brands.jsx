import "../styles/brands.css";

function Brands() {
  const brands = [
    "Siemens",
    "Schneider",
    "ABB",
    "Delta",
    "Omron",
    "L&T",
    "Teknic",
    "Selec"
  ];

  return (
    <div className="brands-section">
      <h3 className="brands-title">Brands We Deal With</h3>

      <div className="brands-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-card">
            {brand}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;