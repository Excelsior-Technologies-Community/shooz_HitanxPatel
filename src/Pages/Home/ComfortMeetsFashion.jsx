import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ComfortMeetsFashion.css";
import { Link } from "react-router-dom";

const ComfortMeetsFashion = () => {
  return (
    <>
      <section className="comfort-fashion-section">
        <div className="comfort-fashion-wrapper">

          <img
            src="https://qx-shooz.myshopify.com/cdn/shop/files/wide-banner.png?v=1731045552"
            alt="Shoes"
            className="comfort-fashion-bg"
          />

          <div className="comfort-fashion-overlay">
            <p className="comfort-fashion-subtitle">
              COMFORT MEETS FASHION
            </p>

            <h1 className="comfort-fashion-title">
              Discover shoes that look great <br />
              and feel even better
            </h1>

            <p className="comfort-fashion-description">
              Our collection features comfortable and stylish footwear designed
              to keep your feet happy all day long.
            </p>

            {/* <button className="comfort-fashion-btn">
              SHOP NOW →
            </button> */}
            <Link to="/collection" className="comfort-fashion-btn">
              SHOP NOW →
            </Link>
          </div>

        </div>
      </section>

      <div className="offer-bar">
        <div className="offer-track">

          <div className="offer-container">
            <div className="offer-item">Buy one pair of shoes, get the second pair 50% off. Use code BOGO50</div>
            <div className="offer-item">Enjoy 20% off your entire order with code SHOEFRESH20</div>
            <div className="offer-item">Get 15% off your first purchase when you sign up for our newsletter. Use code NEWSHOES15</div>
          </div>

          <div className="offer-container">
            <div className="offer-item">Buy one pair of shoes, get the second pair 50% off. Use code BOGO50</div>
            <div className="offer-item">Enjoy 20% off your entire order with code SHOEFRESH20</div>
            <div className="offer-item">Get 15% off your first purchase when you sign up for our newsletter. Use code NEWSHOES15</div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ComfortMeetsFashion;