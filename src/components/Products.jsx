import React, { useState } from "react";
import "./css/Products.css";


function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const products = {
    cement: [
      { name: "Ambuja", price: "Rs. 410/Bag", image: "/images/ambuja.jpg" },
      { name: "Ultratech", price: "Rs. 390/Bag", image: "/images/ultratech.jpg" },
      { name: "ACC", price: "Rs. 400/Bag", image: "/images/acc.jpg" },
    ],
    ironRod: [
      { name: "Shyam Steel", price: "$500/ton", image: "/images/shyam_steel.jpg" },
      { name: "Bangal Super", price: "$480/ton", image: "/images/bangal_super.jpg" },
      { name: "Tata Tiscon", price: "$550/ton", image: "/images/tata_tiscon.jpg" },
    ],
    bricks: [
      { name: "Red Clay Bricks", price: "$300/1000", image: "/images/red_clay_bricks.jpg" },
      { name: "Fly Ash Bricks", price: "$250/1000", image: "/images/fly_ash_bricks.jpg" },
      { name: "Hollow Blocks", price: "$350/1000", image: "/images/hollow_blocks.jpg" },
    ],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <div className="products">
      <h1>Our Products</h1>
      <div className="categories">
        <ul>
          {Object.keys(products).map((category) => (
            <li key={category} onClick={() => handleCategoryClick(category)}>
              <button className="category-btn">{category}</button>
            </li>
          ))}
        </ul>
      </div>

      {selectedCategory && (
        <div className="product-list">
          <h2>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</h2>
          <div className="product-items">
            {products[selectedCategory].map((product, index) => (
              <div className="product-card" key={index}>
                <div className="product-image-frame">
                  <img src={product.image} alt={product.name} className="product-image" />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
