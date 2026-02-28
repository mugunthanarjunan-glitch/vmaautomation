import { useNavigate } from "react-router-dom";
import productsData from "../data/products.json";
import "../styles/featuredProducts.css";

function FeaturedProducts() {
  const navigate = useNavigate();

  const products = Array.isArray(productsData)
    ? productsData
    : productsData.default;

  const featured = products.slice(0, 4);

  return (
    <div className="featured-section">
      <div className="featured-header">
        <h3>Featured Products</h3>
        <button onClick={() => navigate("/products")}>
          View All
        </button>
      </div>

      <div className="featured-grid">
        {featured.map((product) => (
          <div
            key={product.id}
            className="featured-card"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img src={product.images[0]} alt={product.name} />
            <h4>{product.name}</h4>
            <p>₹ {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;