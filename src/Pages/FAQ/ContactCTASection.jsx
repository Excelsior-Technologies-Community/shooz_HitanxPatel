import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactCTASection.css";

const ContactCTASection = () => {
  return (
    <section className="contactCTASection_container py-5 text-center">
      <div className="container">
        
        <p className="contactCTASection_subtitle mb-2">
          ADVAND SUB
        </p>

        <h2 className="576 mb-4">
          Have a project in mind? Let’s talk.
        </h2>

        <h4 className="contactCTASection_heading mb-2">
          Didn’t find your answer?
        </h4>

        <p className="contactCTASection_text mb-4">
          Don’t hestitate to contact us
        </p>

        <button className="contactCTASection_btn">
          CONTACT US
        </button>

      </div>
    </section>
  );
};

export default ContactCTASection;