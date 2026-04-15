import React from "react";
import "./SubscribeSection.css";

const SubscribeSection = () => {
  return (
    <section className="subscribeSection_wrapper">
      <div className="container-fluid">
        <div className="row g-0 align-items-center">

          <div className="col-lg-6 subscribeSection_content">
            <h2 className="subscribeSection_heading">
              SUBSCRIBE TO OUR NEWS ARTICLES
            </h2>

            <div className="subscribeSection_formWrapper">
              <div className="d-flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="subscribeSection_input form-control"
                />
                <button className="subscribeSection_button">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-6 subscribeSection_imageWrapper">
            <img
              src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-5.png?v=1731500994&width=360"
              alt="shoe"
              className="subscribeSection_image"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;