import React from "react";
import "./FeaturedPicks.css";

const FeaturedPicks = () => {
  return (
    <div className="featured-container">
      <div className="container text-center">
        
        <h2 className="featured-title">Featured Picks of the Week</h2>
        <p className="featured-subtitle">
          Indulge in our carefully curated selection of <br /> the week’s finest.
        </p>

        <div className="row mt-4">
          
          <div className="col-md-4">
            <div className="featured-card">
              <img
                src="https://qx-shooz.myshopify.com/cdn/shop/files/col-3.png?v=1731657937&width=1920"
                alt="Wardrobe"
                className="featured-img"
              />
              <h5 className="card-title">Wardrobe Essentials</h5>
              <p className="card-text">
                Timeless Pieces for Every Occasion
              </p>
              <a href="#" className="view-more">VIEW MORE</a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="featured-card">
              <img
                src="https://qx-shooz.myshopify.com/cdn/shop/files/col-2.png?v=1731657939&width=1920"
                alt="Fitness"
                className="featured-img"
              />
              <h5 className="card-title">Fashion Forward Fitness</h5>
              <p className="card-text">
                Activewear that Moves with You
              </p>
              <a href="#" className="view-more">VIEW MORE</a>
            </div>
          </div>

          <div className="col-md-4">
            <div className="featured-card">
              <img
                src="https://qx-shooz.myshopify.com/cdn/shop/files/filler4.png?v=1731652693&width=1920"
                alt="Seasonal"
                className="featured-img"
              />
              <h5 className="card-title">Seasonal <span className="break-title">Splendor</span></h5>
              <p className="card-text">
                Fall in Love with Autumn Fashion
              </p>
              <a href="#" className="view-more">VIEW MORE</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeaturedPicks;