import React from "react";
import { Container } from "react-bootstrap";
import { FaCalendarAlt, FaUser, FaComments } from "react-icons/fa";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="heroSection__wrapper">
      <Container className="heroSection__content">
        
        <h1 className="heroSection__title">
          The Future of Footwear: A Look Ahead
        </h1>

        <div className="heroSection__meta">
          
          <span className="heroSection__metaItem">
            <FaCalendarAlt className="heroSection__icon" />
            Oct 28 2024
          </span>

          <span className="heroSection__metaItem">
            <FaUser className="heroSection__icon" />
            Qodex Web
          </span>

          <span className="heroSection__metaItem">
            <FaComments className="heroSection__icon" />
            0 Comments
          </span>

        </div>

      </Container>
    </div>
  );
};

export default HeroSection;