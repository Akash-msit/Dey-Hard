import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa"; // Importing location icon from react-icons
import "./css/About.css";

function About() {
  return (

    <div className="about">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Welcome to our hardware shop, your one-stop destination for all construction and home essentials.</p>
        
      </div>
      <div className="owner-info">
        <img
          src='../images/owner.jpeg' // Replace with the actual path to the owner's photo
          alt="Owner"
          className="owner-photo"
        />
        </div>
        <div className="owner-details">
          <h2>Mr. Barun Kumar Dey</h2> {/* Owner's Name */}
          <p>Owner of Dey Hardware</p>
          <p className="phone-number">
            <strong>Phone:</strong> +91 9932697184 {/* Replace with the actual phone number */}
          </p>
        </div>
      <div className="about-content">
        <div className="shop-address">
          <h2>Our Shop Address</h2>
          <div className="location">
            <FaMapMarkerAlt className="location-icon" />
            <p className="address">Near Gopali Indian Bank, Kharagpur, Pin - 721145, West Bengal, India</p>
          </div>
        </div>
      </div>
      <div className="shop-info">
          <p>
            We offer a wide range of construction materials like cement, bricks, iron rods, and day-to-day essentials like farmer products and home-building items.
            Come visit us for high-quality products at the best prices!
          </p>
        </div>
    </div>
  );
}

export default About;
