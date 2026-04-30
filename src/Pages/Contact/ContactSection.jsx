import React from "react";
import "./ContactSection.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaCheck, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="ContactInfoSection_container py-5">
      <div className="container">
        <div className="row">

          <div className="col-md-3 mb-4 ContactInfoSection_item d-flex align-items-start">
            <div className="ContactInfoSection_iconWrapper">
              <FaMapMarkerAlt />
            </div>
            <div className="ContactInfoSection_content">
              <h5>Address</h5>
              <p>Copley, South Australia 5732, Australia.</p>
            </div>
          </div>

          <div className="col-md-3 mb-4 ContactInfoSection_item d-flex align-items-start">
            <div className="ContactInfoSection_iconWrapper">
              <FaPhoneAlt />
            </div>
            <div className="ContactInfoSection_content">
              <h5>Call Us</h5>
              <p>+ (02) 6171 3859</p>
              <p>+ (07) 4088 1324</p>
            </div>
          </div>

          <div className="col-md-3 mb-4 ContactInfoSection_item d-flex align-items-start">
            <div className="ContactInfoSection_iconWrapper">
              <FaCheck />
            </div>
            <div className="ContactInfoSection_content">
              <h5>Open</h5>
              <p>Monday - Friday: 8am - 4pm</p>
              <p>Saturday - Sunday: 9am - 5pm</p>
            </div>
          </div>

          <div className="col-md-3 mb-4 ContactInfoSection_item d-flex align-items-start">
            <div className="ContactInfoSection_iconWrapper">
              <FaEnvelope />
            </div>
            <div className="ContactInfoSection_content">
              <h5>Emails</h5>
              <p>example@example.com</p>
              <p>example@example.com</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;