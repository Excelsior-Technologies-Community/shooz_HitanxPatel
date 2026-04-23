import React from "react";
import "./HeroSection.css"; // (file name: HeroSection.css)

const HeroSection = () => {
  return (
    <div className="hero-section-container">
      
      <img 
        src="https://qx-shooz.myshopify.com/cdn/shop/files/filler2.png?v=1731652695"
        alt="Hero"
        className="hero-section-image"
      />

      <div className="hero-section-overlay">
        <div className="container text-center">

          <p className="hero-section-subtitle">
            EFFORTLESS FASHION, EVERY DAY
          </p>

          <h1 className="hero-section-title">
            Chic Styles For The Modern Woman
          </h1>

          <p className="hero-section-description">
            Embrace effortless elegance with our curated collection of chic styles designed for the modern woman. From desk to dinner, our fashion pieces effortlessly transition with you. Unlock exclusive offers and redefine your daily style with ease.
          </p>

        </div>
      </div>

    </div>
  );
};

export default HeroSection;