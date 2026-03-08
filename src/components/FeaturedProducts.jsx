import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/featuredProducts.css";

function FeaturedProducts() {

  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const res = await axios.get("https://vmaautomation.in/api/getProducts.php");

        setProducts(res.data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchProducts();

  }, []);


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

            <img src={`https://vmaautomation.in/${product.images[0]}`} alt={product.name} />

            <h4>{product.name}</h4>

            <p>₹ {product.price}</p>

          </div>

        ))}

      </div>

    </div>
  );

}

export default FeaturedProducts;