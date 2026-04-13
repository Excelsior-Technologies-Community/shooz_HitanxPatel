import React from "react";
import "./PopularStyles.css";

const PopularStyles = () => {
  return (
    <section className="popular-styles-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <p className="popular-subtitle">OUR MOST POPULAR STYLES</p>

            <h1 className="popular-title">
              Save big on shoes <br />
              from last season
            </h1>

            <p className="popular-text">
              Morbi natoque id finibus natoque sapien turpis elementum maximus.
              Sociosqu auctor a urna consequat laoreet nisi accumsan magna.
              Adipiscing vulputate nec euismod, a aliquam enim.
            </p>

            <p className="popular-text">
              Molestie dolor mus vitae penatibus sed lectus convallis ut neque.
              Leo elementum euismod penatibus cras sociosqu aliquet tellus.
            </p>

            <button className="btn popular-btn">
              SHOP NOW →
            </button>
          </div>

          {/* RIGHT IMAGES */}
          <div className="col-lg-6 d-flex gap-3 justify-content-center mt-4 mt-lg-0">
            
            <div className="popular-img-box">
              <img
                src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
                alt="shoe1"
                className="img-fluid"
              />
            </div>

            <div className="popular-img-box">
              <img
                src="https://images.unsplash.com/photo-1519744346363-d06d4c6d5d67"
                alt="shoe2"
                className="img-fluid"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default PopularStyles;