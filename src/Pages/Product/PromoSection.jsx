import React from "react";
import "./PromoSection.css";

const PromoSection = () => {
  return (
    <section className="promoSection__wrapper container-fluid py-5">
      <div className="row align-items-center">

        <div className="col-md-6 position-relative promoSection__imageBox">
          <img
            src="https://qx-shooz.myshopify.com/cdn/shop/files/filler3.png?v=1731652694&width=900"
            alt="main"
            className="img-fluid promoSection__mainImg"
          />

          <img
            src="https://qx-shooz.myshopify.com/cdn/shop/files/filler4.png?v=1731652693&width=360"
            alt="overlay"
            className="promoSection__overlayImg"
          />
        </div>

        <div className="col-md-6 promoSection__content">
          <p className="promoSection__subtitle">
            CLASSIC MEETS CONTEMPORARY
          </p>

          <h2 className="promoSection__title">
            Timeless Styles With A Modern Edge
          </h2>

          <p className="promoSection__desc">
            Experience the best of both worlds with our collection that seamlessly blends timeless classics with modern twists.
            Elevate your wardrobe with pieces that stand the test of time while embracing the latest fashion innovations.
            Shop now for exclusive discounts.
          </p>

          <button className="btn promoSection__btn">
            DISCOVER NOW
          </button>
        </div>

      </div>
    </section>
  );
};

export default PromoSection;