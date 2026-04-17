import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CategorySection.css";
import { Link } from "react-router-dom";

const CategorySection = () => {
  return (
    <div className="container category-section">
      <div className="row g-4">

        <div className="col-md-4">
          <div className="category-card">
            <img
              src="https://qx-shooz.myshopify.com/cdn/shop/files/grid-three-1.png?v=1731045511&width=1920"
              alt="men"
              className="category-img"
            />
            <div className="category-content">
              <p className="category-tag">TRENDING</p>
              <h2 className="category-title">Men Collections</h2>
              {/* <a href="../Collection.jsx" className="category-btn">SHOP NOW</a> */}
              <Link to="/collection" className="category-btn">
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="category-card">
            <img
              src="https://qx-shooz.myshopify.com/cdn/shop/files/grid-three-3.png?v=1731045510&width=1920"
              alt="women"
              className="category-img"
            />
            <div className="category-content">
              <p className="category-tag">LATEST</p>
              <h2 className="category-title">Women Collections</h2>
              {/* <a href="#" className="category-btn">SHOP NOW</a> */}
              <Link to="/collection" className="category-btn">
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="category-card">
            <img
              src="https://qx-shooz.myshopify.com/cdn/shop/files/grid-three-2.png?v=1731045516&width=1920"
              alt="kids"
              className="category-img"
            />
            <div className="category-content">
              <p className="category-tag">COMFORT</p>
              <h2 className="category-title">Kid Collections</h2>
              {/* <a href="#" className="category-btn">SHOP NOW</a> */}
              <Link to="/collection" className="category-btn">
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CategorySection;