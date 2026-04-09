import React from "react";
import "./Heroslider.css";

const HeroSlider = () => {
  return (
    <div
      id="heroCarousel"
      className="carousel slide hero-slider"
      data-bs-ride="carousel"
    >

      <div className="carousel-indicators hero-indicators">
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
      </div>

      <div className="carousel-inner">

        <div className="carousel-item active hero-slide">
          <img src="https://qx-shooz.myshopify.com/cdn/shop/files/banner-1.png?v=1731045553" className="d-block w-100 hero-img" alt="" /> {/* (hero-img) image */}
          
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <p className="hero-subtitle">STEP INTO STYLE</p>
            <h1 className="hero-title">Discover The Latest Trends In Footwear</h1>
            <p className="hero-desc">
              From classic sneakers to trendy boots, our collection has something for everyone.
            </p>
            <button className="btn hero-btn">SHOP NOW →</button>
          </div>
        </div>

        <div className="carousel-item hero-slide">
          <img src="https://qx-shooz.myshopify.com/cdn/shop/files/banner-2.png?v=1731045552" className="d-block w-100 hero-img" alt="" />
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <p className="hero-subtitle">ELEVATE YOUR LOOK</p>
            <h1 className="hero-title">Find The Perfect Pair Of Shoes</h1>
            <p className="hero-desc">
              Explore our wide range of styles, colors, and materials.
            </p>
            <button className="btn hero-btn">SHOP NOW →</button>
          </div>
        </div>

        <div className="carousel-item hero-slide">
          <img src="https://qx-shooz.myshopify.com/cdn/shop/files/banner-3.png?v=1731045552" className="d-block w-100 hero-img" alt="" />
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <p className="hero-subtitle">COMFORT MEETS FASHION</p>
            <h1 className="hero-title">
              Discover Shoes That Look Great And Feel Even Better
            </h1>
            <p className="hero-desc">
              Designed to keep your feet happy all day long.
            </p>
            <button className="btn hero-btn">SHOP NOW →</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSlider;