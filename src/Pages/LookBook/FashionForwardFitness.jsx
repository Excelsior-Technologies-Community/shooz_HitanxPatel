import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./FashionForwardFitness.css";

const FashionForwardFitness = () => {
  return (
    <section className="FashionForwardFitness_section">
      <Container fluid className="p-0">
        <Row className="align-items-center">

          <Col md={6} className="FashionForwardFitness_imageCol p-0">
            <img
              src="https://qx-shooz.myshopify.com/cdn/shop/files/col-1.png?v=1731657942&width=900"
              alt="Fashion Fitness"
              className="FashionForwardFitness_image img-fluid"
            />
          </Col>

          <Col md={6} className="FashionForwardFitness_contentCol">
            <div className="FashionForwardFitness_content">

              <p className="FashionForwardFitness_subtitle">
                FASHION FORWARD FITNESS
              </p>

              <h2 className="FashionForwardFitness_title">
                Timeless Pieces For Every Occasion
              </h2>

              <p className="FashionForwardFitness_desc">
                Build a wardrobe that speaks volumes. Explore our collection of timeless
                essentials, perfect for every occasion. From casual chic to formal elegance.
              </p>

              <Button className="FashionForwardFitness_btn">
                DISCOVER NOW
              </Button>

            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default FashionForwardFitness;