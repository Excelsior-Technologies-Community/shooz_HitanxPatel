import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CustomerFeedbackSection.css";

const CustomerFeedbackSection = () => {
  const logos = [
    "https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-1.png?v=1731499378&width=1920",
    "https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-3.png?v=1731499378&width=1920",
    "https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-5.png?v=1731499378&width=1920",
    "https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-7.png?v=1731499378&width=1920",
    "https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-9.png?v=1731499378&width=1920",
    "https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-2.png?v=1731499378&width=1920",
    "https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-11.png?v=1731499961&width=1920",
    "https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-6.png?v=1731499378&width=1920",
    "https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-8.png?v=1731499379&width=1920",
    "https://qx-shooz.myshopify.com/cdn/shop/files/text-logo-10.png?v=1731499378&width=1920",
  ];

  return (
    <section className="customerFeedbackSection py-5">
      <div className="container text-center">

        <h2 className="customerFeedbackSection_heading mb-3">
          Customer Feedback Highlights
        </h2>

        <p className="customerFeedbackSection_subtext mb-5">
          Laoreet ridiculus congue magna malesuada <br /> phasellus condimentum taciti mus primis.
        </p>

        <div className="customerFeedbackSection_scroll">

            <div className="customerFeedbackSection_row">
                {logos.slice(0, 5).map((logo, index) => (
                <div key={index} className="custom-col">
                    <div className="customerFeedbackSection_card">
                    <img src={logo} className="customerFeedbackSection_img" />
                    </div>
                </div>
                ))}
            </div>

            <div className="customerFeedbackSection_row">
                {logos.slice(5, 10).map((logo, index) => (
                <div key={index} className="custom-col">
                    <div className="customerFeedbackSection_card">
                    <img src={logo} className="customerFeedbackSection_img" />
                    </div>
                </div>
                ))}
            </div>

        </div>

      </div>
    </section>
  );
};

export default CustomerFeedbackSection;