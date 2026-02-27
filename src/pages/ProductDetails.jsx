import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import productsData from "../data/products.json";
import "../styles/productDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const products = Array.isArray(productsData)
    ? productsData
    : productsData.default;

  const product = products.find((p) => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0]
  );

  if (!product) {
    return <h2 style={{ padding: "20px" }}>Product Not Found</h2>;
  }

  const handleWhatsApp = () => {
    const message = `Hello, I am interested in ${product.name}. Please share details.`;
    window.open(
      `https://wa.me/918778262206?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <>
      <Navbar />

      <div className="product-details">

        <div className="image-section">
          <img
            src={selectedImage}
            alt={product.name}
            className="main-image"
          />

          <div className="thumbnail-row">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
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

          <a href="tel:8778262206">
            Call Now
          </a>
        </div>

      </div>

      <Footer />
    </>
  );
}

export default ProductDetails;