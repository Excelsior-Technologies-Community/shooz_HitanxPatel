import React from "react";
import "./Breadcrumb.css";

const Breadcrumb = () => {
  return (
    <section className="contactIntroSection_main">
      <div className="container-fluid">

        <div className="contactIntroSection_breadcrumb px-4 py-3">

          <span className="contactIntroSection_home">Home</span>
          <span className="contactIntroSection_separator"> / </span>
          <span className="contactIntroSection_current">FAQs</span>
        </div>

      </div>
    </section>
  );
};

export default Breadcrumb;