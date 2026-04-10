import React from "react";
import "./FashionSneakers.css";

const FashionSneakers = () => {
  return (
    <section className="fashion-sneakers-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <span className="fashion-tag">FASHION SNEAKERS</span>
          <h2 className="fashion-title">Timeless styles for everyday wear</h2>
          <p className="fashion-subtitle">
            High-performance footwear for sports and <br/> workouts
          </p>
        </div>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="fashion-card">
              <img src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-5.png?v=1731500994&width=540" alt="shoe" />
              <div className="fashion-overlay">
                <span>COMFORT MEETS FASHION</span>
                <h4>Discover shoes that look great</h4>
                <a href="#">SHOP NOW</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="fashion-card">
              <img src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-4.png?v=1731500928&width=1512" alt="shoe" />
              <div className="fashion-overlay">
                <span>ELEVATE YOUR LOOK</span>
                <h4>Find the perfect pair of shoes</h4>
                <a href="#">SHOP NOW</a>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="fashion-card">
              <img src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-3.png?v=1731500948&width=540" alt="shoe" />
              <div className="fashion-overlay">
                <span>STEP INTO STYLE</span>
                <h4>The latest trends in footwear</h4>
                <a href="#">SHOP NOW</a>
              </div>
            </div>
          </div>

        </div>

        <div className="row g-4 mt-4">

          <div className="col-md-6">
            <div className="fashion-card large">
              <img src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-2.png?v=1731657969&width=1080" alt="shoe" />
              <div className="fashion-overlay">
                <span>SHOP BY BRAND</span>
                <h4>Find your favorite brands and styles</h4>
                <a href="#">SHOP NOW</a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="fashion-card large">
              <img src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-2.png?v=1731500928&width=1512" alt="shoe" />
              <div className="fashion-overlay">
                <span>SALE AND CLEARANCE</span>
                <h4>Shop our latest deals and discounts</h4>
                <a href="#">SHOP NOW</a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FashionSneakers;