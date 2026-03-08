import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Adminpage.css";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    description: ""
  });

  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  // FETCH PRODUCTS
  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://vmaautomation.in/api/getProducts.php")
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token")
    if(!token){
      navigate("/admin/login")
    }
    else{
      fetchProducts();
    }
  }, []);

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // HANDLE IMAGE
  const handleImageChange = (e) => {

    const files = Array.from(e.target.files);

    setImages(files);

    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
  };

  // SUBMIT PRODUCT
  const handleSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("price", form.price);
    formData.append("category", form.category);
    formData.append("description", form.description);

    // REQUIRED FIX
    images.forEach((img) => {
      formData.append("images[]", img);
    });

    try {

      if (editingId) {
        formData.append("id",editingId)
        await axios.post("https://vmaautomation.in/api/updateProduct.php", formData)

        alert("Product Updated");

      } else {

        await axios.post("https://vmaautomation.in/api/createProduct.php", formData)

        alert("Product Added");
      }

      setEditingId(null);

      setForm({
        name: "",
        price: "",
        category: "",
        description: ""
      });

      setImages([]);
      setPreviewImages([]);

      fetchProducts();

    } catch (error) {
      console.log(error);
    }
  };

  // EDIT PRODUCT
  const editProduct = (product) => {

    setEditingId(product.id);

    setForm({
      name: product.name,
      price: product.price,
      category: product.category,
      description: product.description
    });

    setPreviewImages(product.images || []);
  };

  // DELETE PRODUCT
  const deleteProduct = async (id) => {

    try {

      await axios.get(`https://vmaautomation.in/api/deleteProduct.php?id=${id}`)

      fetchProducts();

    } catch (error) {
      console.log(error);
    }

  };

  return (
    <div className="admin-container">

      <h2 className="admin-title">
        {editingId ? "Edit Product" : "Add Product"}
      </h2>

      <form onSubmit={handleSubmit} className="admin-form">

        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="price"
          placeholder="Product Price"
          value={form.price}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="file"
          multiple
          onChange={handleImageChange}
        />

        <br /><br />

        <div className="preview-container">

          {previewImages.map((img, index) => (

            <img
              key={index}
              src={img}
              alt="preview"
            />

          ))}

        </div>

        <br />

        <button type="submit" className="admin-btn">
          {editingId ? "Update Product" : "Add Product"}
        </button>

      </form>

      <h2 className="admin-title">Products</h2>

      <div className="product-grid">

        {products.map((product) => (

          <div key={product.id} className="product-card">

            <h3>{product.name}</h3>

            <p><b>Price:</b> ₹{product.price}</p>

            <p><b>Category:</b> {product.category}</p>

            <p>{product.description}</p>

            <div className="product-images">

              {product.images && product.images.map((img, index) => (

                <img
                  key={index}
                  src={`https://vmaautomation.in/${img}`}
                  alt="product"
                />

              ))}

            </div>

            <div className="action-btn">

              <button
                onClick={() => editProduct(product)}
                className="edit-btn"
              >
                Edit
              </button>

              <button
                onClick={() => deleteProduct(product.id)}
                className="delete-btn"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AdminDashboard;