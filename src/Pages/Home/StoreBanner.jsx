import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./StoreBanner.css";

const StoreBanner = () => {
  return (
    <section className="storeBanner_main">
      <div className="container storeBanner_container">
        <div className="row align-items-center">
          
          <div className="col-lg-8 text-center text-md-start storeBanner_text">
            <h5 className="storeBanner_heading">
              Discover Our Stores: Your Local Shoe Haven
            </h5>
          </div>

          <div className="col-lg-4 text-center text-md-end storeBanner_buttonWrapper">
            <button className="storeBanner_button">
              FIND STORE
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StoreBanner;