import React from "react";
import "./ExploreSection.css";
import { Container, Row, Col } from "react-bootstrap";

const ExploreSection = () => {
  return (
    <section className="ExploreSection_main">
      <Container>
        <div className="ExploreSection_heading text-center">
          <p className="ExploreSection_subtitle">EXPLORE</p>
          <h2 className="ExploreSection_title">Our Collections</h2>
        </div>

        <Row className="g-4 align-items-stretch">
          <Col md={6}>
            <div className="ExploreSection_card ExploreSection_large">
              <img
                src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002"
                alt="Athletic"
                className="img-fluid"
              />
              <div className="ExploreSection_overlay">
                <h5 className="ExploreSection_titleText">Athletic Footwear</h5>
                <p className="ExploreSection_subText">8 Products</p>
              </div>
            </div>
          </Col>

          <Col md={6} className="d-flex">
            <div className="ExploreSection_right w-100">
              <div className="ExploreSection_card">
                <img
                  src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-4.png?v=1731657987&width=1512"
                  alt=""
                />
                <div className="ExploreSection_overlay">
                    <h5 className="ExploreSection_titleText">Boots For Every Occasion</h5>
                    <p className="ExploreSection_subText">8 Products</p>
                </div>
              </div>

              <div className="ExploreSection_card">
                <img
                  src="https://qx-shooz.myshopify.com/cdn/shop/collections/col-6.png?v=1731658012&width=1512"
                  alt=""
                />
                <div className="ExploreSection_overlay">
                    <h5 className="ExploreSection_titleText">Luxury Leather Shoes</h5>
                    <p className="ExploreSection_subText">8 Products</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ExploreSection;
