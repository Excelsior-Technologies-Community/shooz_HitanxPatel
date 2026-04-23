import React from "react";
import "./HeroExplorer.css";

const HeroExplorer = () => {
  return (
    <section className="heroExplorer__wrapper">
      <div className="heroExplorer__overlay"></div>

      <div className="container heroExplorer__content text-center">
        
        <div className="heroExplorer__rating">
          ★★★★★ <span>3000+ Reviews</span>
        </div>

        <h1 className="heroExplorer__title">
          For the Explorers.
        </h1>

        <p className="heroExplorer__subtitle">
          Weekends are better with friends
        </p>

      </div>
    </section>
  );
};

export default HeroExplorer;