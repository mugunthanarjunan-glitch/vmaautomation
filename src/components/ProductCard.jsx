import { useNavigate } from "react-router-dom";
import "../styles/productCard.css"
function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img src={`https://vmaautomation.in/${product.images[0]}`} alt={product.name} />
      <h4>{product.name}</h4>
      <p>₹ {product.price}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          const msg = `Hello, I am interested in ${product.name}`;
          window.open(
            `https://wa.me/917373122980?text=${encodeURIComponent(msg)}`,
            "_blank"
          );
        }}
      >
        Get Quote
      </button>
    </div>
  );
}

export default ProductCard;