import React from "react";
import "./ContactIntroSection.css";

const ContactIntroSection = () => {
  return (
    <section className="contactIntroSection_main">
      <div className="container-fluid">

        <div className="contactIntroSection_breadcrumb px-4 py-3">

          <span className="contactIntroSection_home">Home</span>
          <span className="contactIntroSection_separator"> / </span>
          <span className="contactIntroSection_current">Contact</span>
        </div>

        <div className="row align-items-center maindata">

          <div className="col-md-6 p-0">
            <div className="contactIntroSection_imageWrapper">
              <img
                src="https://qx-shooz.myshopify.com/cdn/shop/files/col-5.png?v=1731657940&width=1080"
                alt="shoes"
                className="img-fluid contactIntroSection_image"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="contactIntroSection_content px-4 px-lg-5">
              
              <p className="contactIntroSection_subtitle">
                TIMELESS ELEGANCE, MODERN CHARM
              </p>

              <h1 className="contactIntroSection_title">
                Indulge in Timeless Classics with a Modern Twist
              </h1>

              <p className="contactIntroSection_description">
                Embrace the allure of timeless fashion with our collection of modern classics.
                From essential basics to statement pieces, redefine elegance with a contemporary touch.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactIntroSection;