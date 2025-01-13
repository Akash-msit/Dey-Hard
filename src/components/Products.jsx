import React, { useState, useEffect } from "react";
import "./css/Products.css";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Product data with specific variants for cement
  const [products, setProducts] = useState({
    cement: [
      {
        name: "Ultratech",
        image: "/images/ultratech.jpg",
        variants: [
          { type: "Normal Ultratech" },
          { type: "Premium Ultratech" },
        ],
      },
      {
        name: "ACC",
        image: "/images/acc.jpg",
        variants: [
          { type: "Normal ACC" },
          { type: "ACC F2R" },
        ],
      },
      {
        name: "Ambuja",
        image: "/images/ambuja.jpg",
      },
    ],
    ironRod: [
      { name: "Shyam Steel", image: "/images/shyam_steel.jpg" },
      { name: "Bangal Super", image: "/images/bangal_super.jpg" },
    ],
    bricks: [
      { name: "Red Clay Bricks", image: "/images/red_clay_bricks.jpg" },
      { name: "Fly Ash Bricks", image: "/images/fly_ash_bricks.jpg" },
    ],
  });

  // Simulating price updates for specific products
  useEffect(() => {
    const interval = setInterval(() => {
      setProducts((prevProducts) => ({
        ...prevProducts,
        cement: prevProducts.cement.map((product) =>
          product.variants
            ? {
                ...product,
                variants: product.variants.map((variant) => ({
                  ...variant,
                })),
              }
            : product
        ),
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <div className="products">
      <h1>Our Products</h1>
      <div className="categories">
        {Object.keys(products).map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="product-list">
          <h2>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</h2>
          <div className="product-items">
            {products[selectedCategory].map((product, index) => (
              <div className="product-card" key={index}>
                <div className="product-image-frame">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                </div>
                <h3>{product.name}</h3>
                {product.variants ? (
                  <ul>
                    {product.variants.map((variant, idx) => (
                      <li key={idx}>{variant.type}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
