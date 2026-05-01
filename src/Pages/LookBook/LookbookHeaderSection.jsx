import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LookbookHeaderSection.css";

const LookbookHeaderSection = () => {
  return (
    <section className="lookbookHeaderSection">
      
      <div className="lookbookHeaderSection__breadcrumb container-fluid py-2">
        <span className="lookbookHeaderSection__breadcrumb-home">Home</span>
        <span className="mx-2">/</span>
        <span className="lookbookHeaderSection__breadcrumb-current">Lookbook</span>
      </div>

      <div className="lookbookHeaderSection__hero d-flex align-items-center justify-content-center text-center">
        
        <div className="lookbookHeaderSection__overlay"></div>

        <div className="lookbookHeaderSection__content text-white">
          <p className="lookbookHeaderSection__tagline">
            STEP ONTO THE RUNWAY OF LIFE
          </p>

          <h1 className="lookbookHeaderSection__title">
            Your Everyday Fashion, Runway Ready
          </h1>

          <p className="lookbookHeaderSection__description">
            Transform your daily look into a runway-worthy ensemble.
            <br />
            Our curated collection brings the glamour of the catwalk to your everyday life.
          </p>
        </div>

      </div>
    </section>
  );
};

export default LookbookHeaderSection;