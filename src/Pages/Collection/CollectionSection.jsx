import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./CollectionSection.css";

const collections = [
  {
    title: "Athletic Footwear",
    img: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=900",
  },
  {
    title: "Boots For Every Occasion",
    img: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-4.png?v=1731657987&width=900",
  },
  {
    title: "Luxury Leather Shoes",
    img: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-6.png?v=1731658012&width=900",
  },
  {
    title: "Sandals & Slides",
    img: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-2.png?v=1731657969&width=900",
  },
  {
    title: "Sustainable Footwear",
    img: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-1.png?v=1731657959&width=900",
  },
];

const CollectionSection = () => {
  return (
    <section className="collectionSection______main">
      <Container>
        <div className="collectionSection______breadcrumb">
          <span className="breadcrumb______home">Home</span> / <span>Collections</span>
        </div>

        <Row className="g-4">
          {collections.map((item, index) => (
            <Col lg={4} md={12} key={index}>
              <div className="collectionCard______wrapper">
                
                <div className="collectionCard______imageBox">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="collectionCard______image"
                  />
                </div>

                <div className="collectionCard______overlay">
                  <h5 className="collectionCard______title">
                    {item.title} <sup>8</sup>
                  </h5>
                </div>

              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CollectionSection;