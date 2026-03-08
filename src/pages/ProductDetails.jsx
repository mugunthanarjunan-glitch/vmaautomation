import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/productDetails.css";
import Companydet from "../components/Companydet";

function ProductDetails() {

  const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const res = await axios.get("https://vmaautomation.in/api/getProducts.php");

        setProducts(res.data);
        console.log(res.data)

      } catch (error) {

        console.log(error);

      }

    };

    fetchProducts();

  }, []);

  const product = products.find((p) => p.id == id);

  // set default image when product loads
  useEffect(() => {
    if (product && product.images && product.images.length > 0) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  // show loading while fetching
  if (products.length === 0) {
    return <h2 style={{ padding: "20px" }}>Loading...</h2>;
  }

  if (!product) {
    return <h2 style={{ padding: "20px" }}>Product Not Found</h2>;
  }

  const handleWhatsApp = () => {

    const message = `Hello, I am interested in ${product.name}. Please share details.`;

    window.open(
      `https://wa.me/917373122980?text=${encodeURIComponent(message)}`,
      "_blank"
    );

  };

  return (
    <>
      <Navbar />

      <div className="product-details">

        <div className="image-section">

          <img
            src={`https://vmaautomation.in/${selectedImage}`}
            alt={product.name}
            className="main-image"
          />

          <div className="thumbnail-row">

            {product.images.map((img, index) => (

              <img
                key={index}
                src={`https://vmaautomation.in/${img}`}
                alt="thumbnail"
                className={
                  selectedImage === img
                    ? "thumbnail active-thumb"
                    : "thumbnail"
                }
                onClick={() => setSelectedImage(img)}
              />

            ))}

          </div>

        </div>

        <div className="details-info">

          <h2>{product.name}</h2>

          <h3>₹ {product.price}</h3>

          <p>{product.description}</p>

          <button onClick={handleWhatsApp}>
            Get Quote on WhatsApp
          </button>

          <a href="tel:7373122980">
            Call Now
          </a>

        </div>

      </div>

      <Footer />
      <Companydet />

    </>
  );
}

export default ProductDetails;