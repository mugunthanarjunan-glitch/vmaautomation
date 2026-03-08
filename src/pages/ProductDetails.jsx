import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/productDetails.css";
import Companydet from "../components/Companydet"
function ProductDetails() {
  
  const { id } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const res = await axios.get("/api/get_products.php");

        setProducts(res.data);

      } catch (error) {

        console.log(error);

      }

    };

    fetchProducts();

  }, []);


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

          <a href="tel:7373122980">
            Call Now
          </a>

        </div>

      </div>

      <Footer />
      <Companydet/>
    </>
  );
}

export default ProductDetails;