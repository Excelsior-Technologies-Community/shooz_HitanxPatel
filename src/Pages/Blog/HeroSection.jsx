import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="heroSection__wrapper">
      <div
        id="heroCarousel"
        className="carousel slide heroSection__carousel"
        data-bs-ride="false"
      >
        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="row align-items-center heroSection__item">
              
              <div className="col-lg-6 heroSection__content">
                <p className="heroSection__tag">FEATURED POST</p>
                <h2 className="heroSection__title">
                  The Future of Footwear: A Look Ahead
                </h2>

                <div className="heroSection__meta">
                    <span>October 28, 2024</span>

                    <span className="heroSection__divider">|</span>

                    <span>Qodex Web</span>

                    <span className="heroSection__divider">|</span>

                    <span>
                        <i className="bi bi-chat"></i> 0 Comments
                    </span>
                </div>

                <p className="heroSection__desc">
                  Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet
                  bibendum enim facilisis...
                </p>

                {/* <button className="btn heroSection__btn">
                  READ MORE →
                </button> */}
                <Link to="/BlogMain" className="btn heroSection__btn">
                  READ MORE →
                </Link>
              </div>

              <div className="col-lg-6 heroSection__imageWrapper">
                <img
                  src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-2.png?v=1731500928&width=1080"
                  alt="shoe"
                  className="img-fluid heroSection__image"
                />
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row align-items-center heroSection__item">
              
              <div className="col-lg-6 heroSection__content">
                <p className="heroSection__tag">FEATURED POST</p>
                <h2 className="heroSection__title">
                  The Ultimate Guide to Sneaker Care
                </h2>

                <div className="heroSection__meta">
                    <span>October 17, 2024</span>

                    <span className="heroSection__divider">|</span>

                    <span>Qodex Web</span>

                    <span className="heroSection__divider">|</span>

                    <span>
                        <i className="bi bi-chat"></i> 0 Comments
                    </span>
                </div>

                <p className="heroSection__desc">
                  Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet
                  bibendum enim facilisis...
                </p>

                {/* <button className="btn heroSection__btn">
                  READ MORE →
                </button> */}
                <Link to="/BlogMain" className="btn heroSection__btn">
                  READ MORE →
                </Link>
              </div>

              <div className="col-lg-6 heroSection__imageWrapper">
                <img
                  src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-6.png?v=1731500962&width=1080"
                  alt="shoes"
                  className="img-fluid heroSection__image"
                />
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row align-items-center heroSection__item">
              
              <div className="col-lg-6 heroSection__content">
                <p className="heroSection__tag">FEATURED POST</p>
                <h2 className="heroSection__title">
                  Eco-Friendly Footwear: Sustainable Style
                </h2>

                <div className="heroSection__meta">
                    <span>October 28, 2024</span>

                    <span className="heroSection__divider">|</span>

                    <span>Qodex Web</span>

                    <span className="heroSection__divider">|</span>

                    <span>
                        <i className="bi bi-chat"></i> 0 Comments
                    </span>
                </div>

                <p className="heroSection__desc">
                  Augue ut lectus arcu bibendum at varius vel. Ipsum nunc aliquet
                  bibendum enim facilisis...
                </p>

                {/* <button className="btn heroSection__btn">
                  READ MORE →
                </button> */}
                <Link to="/BlogMain" className="btn heroSection__btn">
                  READ MORE →
                </Link>
              </div>

              <div className="col-lg-6 heroSection__imageWrapper">
                <img
                  src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-1.png?v=1731500921&width=1080"
                  alt="running shoes"
                  className="img-fluid heroSection__image"
                />
              </div>
            </div>
          </div>

        </div>

        <button
          className="carousel-control-prev heroSection__control"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next heroSection__control"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;