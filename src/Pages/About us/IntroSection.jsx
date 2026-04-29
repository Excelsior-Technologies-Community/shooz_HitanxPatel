// AboutIntroSection.jsx

import React from "react";
import { Container, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import "./IntroSection.css";

const AboutIntroSection = () => {
  return (
    <>
      <section className="aboutIntroSection__breadcrumb">
        <Container>
          <Breadcrumb className="aboutIntroSection__breadcrumbNav">
            <Breadcrumb.Item
              href="/"
              className="aboutIntroSection__breadcrumbItem"
            >
              Home
            </Breadcrumb.Item>

            <Breadcrumb.Item
              active
              className="aboutIntroSection__breadcrumbActive"
            >
              About Us 1
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </section>

      <section className="aboutIntroSection">
        <Container>
          <Row className="align-items-center">

            <Col lg={6} className="aboutIntroSection__content text-center">
              <p className="aboutIntroSection__subtitle">
                FALL INTO FASHION
              </p>

              <h1 className="aboutIntroSection__title">
                Upgrade Your Wardrobe for the Season
              </h1>

              <Button className="aboutIntroSection__btn">
                SHOP NOW →
              </Button>
            </Col>

            <Col lg={6} className="aboutIntroSection__imageWrapper">
              <img
                src="https://qx-shooz.myshopify.com/cdn/shop/files/col-1.png?v=1731657942&width=900"
                alt="Fashion"
                className="aboutIntroSection__image"
              />
            </Col>

          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutIntroSection;