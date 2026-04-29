import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./UniqueStyleSection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

const testimonialSettings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        arrows: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        arrows: true,
      },
    },
  ],
};

const UniqueStyleSection = () => {
  return (
  <>
    <section className="uniqueStyleSection_main">
      <Container>
        <Row className="align-items-start">

          <Col md={6} className="uniqueStyleSection_left">
            <p className="uniqueStyleSection_subtitle">
              UNLEASH YOUR UNIQUE STYLE
            </p>

            <h2 className="uniqueStyleSection_title">
              Timeless Elegance, Modern Flair
            </h2>

            <p className="uniqueStyleSection_desc">
              Indulge in the fusion of timeless classics and modern flair. Our curated selection
              brings you sophistication with a contemporary twist. Shop now to redefine your
              style and enjoy exclusive offers on the latest fashion essentials.
            </p>

            <div className="uniqueStyleSection_smallImg text-center">
              <img
                src="https://cdn.shopify.com/s/files/1/0714/6517/3218/files/filler6.png?v=1731662117"
                alt="Red Shoe"
                className="img-fluid"
              />
            </div>
          </Col>

          <Col md={6} className="uniqueStyleSection_right">
            <img
              src="https://qx-shooz.myshopify.com/cdn/shop/files/filler5.png?v=1731661778&width=900"
              alt="Shoes Display"
              className="img-fluid uniqueStyleSection_mainImg"
            />
          </Col>

        </Row>
      </Container>
    </section>

    <section className="uniqueStyleSection_testimonial">
    <Container>
        <Slider {...testimonialSettings}>

        <div className="uniqueStyleSection_testimonialCard">
            <div className="uniqueStyleSection_user">
                <img src="https://qx-shooz.myshopify.com/cdn/shop/files/testi1.jpg?v=1731662817&width=300" alt="" />
            
                <div className="uniqueStyleSection_userInfo">
        
                    <div className="uniqueStyleSection_userTop">
                    <h6>Emily Johnson</h6>
                    <span className="uniqueStyleSection_quote">”</span>
                    </div>

                    <p>Fashion Enthusiast</p>

                    <div className="uniqueStyleSection_stars">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>

                </div>
            </div>

            <h4>Perfect !</h4>
            <p>
            "I’ve shopped at many online fashion stores, but Gluck is truly exceptional.
            Their quality and style are unmatched."
            </p>
        </div>

        <div className="uniqueStyleSection_testimonialCard">
            <div className="uniqueStyleSection_user">
            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/testi2.jpg?v=1731662817&width=300" alt="" />

            <div className="uniqueStyleSection_userInfo">
        
                    <div className="uniqueStyleSection_userTop">
                    <h6>David Smith</h6>
                    <span className="uniqueStyleSection_quote">”</span>
                    </div>

                    <p>Trendsetter</p>

                    <div className="uniqueStyleSection_stars">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>

                </div>
            </div>

            <h4>Awesome !</h4>
            <p>
            "Gluck is my go-to for the latest fashion trends. Their collection is always up-to-date."
            </p>
        </div>

        <div className="uniqueStyleSection_testimonialCard">
            <div className="uniqueStyleSection_user">
            <img src="https://qx-shooz.myshopify.com/cdn/shop/files/testi3.jpg?v=1731662817&width=300" alt="" />

            <div className="uniqueStyleSection_userInfo">
        
                <div className="uniqueStyleSection_userTop">
                <h6>Sarah Anderson</h6>
                <span className="uniqueStyleSection_quote">”</span>
                </div>

                <p>Fashion Blogger</p>

                <div className="uniqueStyleSection_stars">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>

            </div>
            </div>

            <h4>Amazing !</h4>
            <p>
            "Their commitment to style and quality is evident in every piece they offer."
            </p>
        </div>

        </Slider>
    </Container>
    </section>
  </>
  );
};

export default UniqueStyleSection;