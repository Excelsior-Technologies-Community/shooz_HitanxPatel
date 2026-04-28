import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaPinterestP, FaTag } from "react-icons/fa";
import "./ExploreCollections.css";

const ExploreCollections = () => {
  return (
    <div className="exploreCollections__wrapper">
      <Container>

        <Row>
          <Col className="text-center">
            <h2 className="exploreCollections__title">
              Explore The Our Collections Here..
            </h2>
          </Col>
        </Row>

        <hr className="exploreCollections__divider" />

        <Row className="exploreCollections__shareRow align-items-center">

            <Col lg={6}>
                <span className="exploreCollections__tagIcon">
                <FaTag />
                </span>
            </Col>

            <Col lg={6} className="text-end">
                <span className="exploreCollections__shareItem">
                <FaFacebookF /> Share
                </span>
                <span className="exploreCollections__shareItem">
                <FaTwitter /> Tweet
                </span>
                <span className="exploreCollections__shareItem">
                <FaPinterestP /> Pin it
                </span>
            </Col>

        </Row>

       <Row className="exploreCollections__shareRow-mob d-lg-none align-items-center">

            <Col xs="auto">
                <span className="exploreCollections__tagIcon">
                <FaTag />
                </span>
            </Col>

            <Col xs="auto">
                <span className="exploreCollections__shareItem">
                <FaFacebookF /> Share
                </span>
                <span className="exploreCollections__shareItem">
                <FaTwitter /> Tweet
                </span>
                <span className="exploreCollections__shareItem">
                <FaPinterestP /> Pin it
                </span>
            </Col>

        </Row>

        <hr className="exploreCollections__divider" />

        <Row className="align-items-center exploreCollections__postSection">

          <Col xs={12} lg={2}>
            <img
              src="https://qx-shooz.myshopify.com/cdn/shop/articles/blog-2.png"
              alt="post"
              className="exploreCollections__img"
            />
          </Col>

          <Col xs={12} lg={4}>
            <p className="exploreCollections__prevText">
              ← PREVIOUS POST
            </p>
            <h5 className="exploreCollections__postTitle">
              Eco-Friendly Footwear: <br />
              Sustainable Style
            </h5>
          </Col>

          <Col lg={6} className="d-none d-md-block">
            <div className="exploreCollections__verticalDivider"></div>
          </Col>

        </Row>

        <hr className="exploreCollections__divider" />

      </Container>
    </div>
  );
};

export default ExploreCollections;