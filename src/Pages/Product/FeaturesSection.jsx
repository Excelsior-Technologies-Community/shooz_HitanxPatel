import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FeaturesSection.css";

const FeaturesSection = () => {
  return (
    <div className="featuressection-container py-5">
      <div className="container">
        <div className="row text-center">

          <div className="col-lg-3 ">
            <div className="featuressection-item">
              <i className="fas fa-truck featuressection-icon"></i>
              <h5 className="featuressection-title">Free Shipping</h5>
              <p className="featuressection-text">
                From all orders over $100
              </p>
            </div>
          </div>

          <div className="col-lg-3 ">
            <div className="featuressection-item">
              <i className="fas fa-headset featuressection-icon"></i>
              <h5 className="featuressection-title">Quality Support</h5>
              <p className="featuressection-text">
                24/7 online feedback
              </p>
            </div>
          </div>

          <div className="col-lg-3 ">
            <div className="featuressection-item">
              <i className="fas fa-undo featuressection-icon"></i>
              <h5 className="featuressection-title">Return & Refund</h5>
              <p className="featuressection-text">
                Return money within 30 days
              </p>
            </div>
          </div>

          <div className="col-lg-3 ">
            <div className="featuressection-item">
              <i className="fas fa-ticket-alt featuressection-icon"></i>
              <h5 className="featuressection-title">Gift Voucher</h5>
              <p className="featuressection-text">
                20% off when you shop online
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;