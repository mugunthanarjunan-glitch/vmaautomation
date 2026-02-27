import { useNavigate } from "react-router-dom";
import "../styles/productCard.css"
function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img src={product.images[0]} alt={product.name} />
      <h4>{product.name}</h4>
      <p>₹ {product.price}</p>
      <button
        onClick={(e) => {
          e.stopPropagation();
          const msg = `Hello, I am interested in ${product.name}`;
          window.open(
            `https://wa.me/918778262206?text=${encodeURIComponent(msg)}`,
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