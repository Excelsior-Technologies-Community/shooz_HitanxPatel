import React from "react";
import "./SaleEvent.css";

const SaleEvent = () => {
  return (
    <div className="saleevent-container py-4">
      <div className="container-fluid">
        <div className="saleevent-box d-flex flex-column flex-lg-row align-items-center justify-content-between px-4 py-4">
          
          <div className="saleevent-left text-center text-lg-start mb-3 mb-lg-0 gap-4">
            <h2 className="saleevent-title">Sale Event</h2>
            <p className="saleevent-text">
              We've refreshed our sale with discounts of up to 50% on select styles.
            </p>
          </div>

          <div className="saleevent-middle mb-3 mb-lg-0">
            <button className="saleevent-enddeal-btn btn">
              End Deal
            </button>
          </div>

          <div className="saleevent-right">
            <button className="saleevent-shop-btn btn">
              SHOP COLLECTION
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SaleEvent;