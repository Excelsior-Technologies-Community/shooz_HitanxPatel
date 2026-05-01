import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SeasonStyleSection.css";

const SeasonStyleSection = () => {
  return (
    <section className="seasonStyleSection py-5">
      <div className="container text-center">

        <h2 className="seasonStyleSection__title mb-3">
          Chase the Seasons in Style
        </h2>
        <p className="seasonStyleSection__subtitle mb-5">
          Update your wardrobe with the latest seasonal <br /> trends. From cozy knits to stylish layers.
        </p>

        <div className="row g-4">

          <div className="col-md-6">
            <div className="seasonStyleSection__card">
              <img
                src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=540"
                alt="style1"
                className="img-fluid seasonStyleSection__image"
              />

              <div className="seasonStyleSection__content mt-4">
                <h4 className="seasonStyleSection__cardTitle">
                  Express Your Authenticity
                </h4>
                <p className="seasonStyleSection__cardText">
                  Fashion that Speaks Your Unique Style
                </p>
                <a href="#" className="seasonStyleSection__btn">
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="seasonStyleSection__card">
              <img
                src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=540"
                alt="style2"
                className="img-fluid seasonStyleSection__image"
              />

              <div className="seasonStyleSection__content mt-4">
                <h4 className="seasonStyleSection__cardTitle">
                  Seasonal Chic Arrivals
                </h4>
                <p className="seasonStyleSection__cardText">
                  Step into the Latest Fashion Trends
                </p>
                <a href="#" className="seasonStyleSection__btn">
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SeasonStyleSection;