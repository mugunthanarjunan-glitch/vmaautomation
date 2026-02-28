import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products.json";
import "../styles/products.css";

function Products() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState("default");
  const [visibleCount, setVisibleCount] = useState(6);

  const products = Array.isArray(productsData)
    ? productsData
    : productsData.default;

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category))
  ];

  let filtered = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  
  if (sortOption === "low-high") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortOption === "high-low") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortOption === "a-z") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  
  const visibleProducts = filtered.slice(0, visibleCount);

  return (
    <>
      <Navbar />

      <div className="products-page">

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setVisibleCount(6); 
          }}
          className="search-input"
        />

        
        <div className="category-filter">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={
                selectedCategory === cat
                  ? "category-btn active-category"
                  : "category-btn"
              }
              onClick={() => {
                setSelectedCategory(cat);
                setVisibleCount(6); 
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        
        <div className="sort-section">
          <select
            value={sortOption}
            onChange={(e) => {
              setSortOption(e.target.value);
              setVisibleCount(6); 
            }}
          >
            <option value="default">Sort By</option>
            <option value="low-high">Price: Low → High</option>
            <option value="high-low">Price: High → Low</option>
            <option value="a-z">Name: A → Z</option>
          </select>
        </div>

        
        <div className="product-grid">
          {visibleProducts.length > 0 ? (
            visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p style={{ textAlign: "center", marginTop: "20px" }}>
              No products found.
            </p>
          )}
        </div>

       
        {visibleCount < filtered.length && (
          <div className="load-more-container">
            <button
              className="load-more-btn"
              onClick={() => setVisibleCount((prev) => prev + 6)}
            >
              Load More
            </button>
          </div>
        )}

      </div>

      <Footer />
    </>
  );
}

export default Products;