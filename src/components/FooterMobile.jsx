import React, { useState } from "react";
import "./FooterMobile.css";

const FooterMobile = () => {
  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };

  return (
    <div className="footerMobile">

      <div className="footerAccordion_item">
        <div onClick={() => toggle("info")} className="footerAccordion_header">
          INFORMATION <span>{open === "info" ? "-" : "+"}</span>
        </div>

        {open === "info" && (
          <ul className="footerSection_list">
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Returns Policy</li>
            <li>Shipping Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        )}
      </div>

      <div className="footerAccordion_item">
        <div onClick={() => toggle("quick")} className="footerAccordion_header">
          QUICK LINKS <span>{open === "quick" ? "-" : "+"}</span>
        </div>

        {open === "quick" && (
          <ul className="footerSection_list">
            <li>My Account</li>
            <li>My Cart</li>
            <li>Size Chart</li>
            <li>Wishlist</li>
            <li>Gift Card</li>
          </ul>
        )}
      </div>

      <div className="footerSection_center">
        <img
          src="https://qx-shooz.myshopify.com/cdn/shop/files/logo.png?v=1731409697&width=360"
          alt="logo"
          className="footerSection_logoImg"
        />
        <p className="footerSection_text">T: + (08) 9055 0269</p>
        <p className="footerSection_text">E: example@example.com</p>
        <p className="footerSection_text">
          50 Porana Place, West Casuarinas,
          Western Australia, Australia.
        </p>
      </div>

      <div className="footerAccordion_item">
        <div onClick={() => toggle("cat")} className="footerAccordion_header">
          CATEGORIES <span>{open === "cat" ? "-" : "+"}</span>
        </div>

        {open === "cat" && (
          <ul className="footerSection_list">
            <li>Athletic Footwear</li>
            <li>Boots for Every Occasion</li>
            <li>Luxury Leather Shoes</li>
            <li>Sandals & Slides</li>
            <li>Sneakerhead’s Haven</li>
          </ul>
        )}
      </div>

      <div className="footerAccordion_item">
        <div onClick={() => toggle("support")} className="footerAccordion_header">
          SUPPORT <span>{open === "support" ? "-" : "+"}</span>
        </div>

        {open === "support" && (
          <ul className="footerSection_list">
            <li>Contact Us</li>
            <li>Newsletter</li>
            <li>Gift Cards</li>
            <li>Sign In</li>
            <li>My Account</li>
          </ul>
        )}
      </div>

      <div className="footerSection_line"></div>

      <p className="footerSection_copy text-center mt-3">
        Copyright © 2024 <span>Shooz</span>. All rights reserved
      </p>

      <div className="footerSection_paymentsWrapper">
        <div className="footerSection_payments">
          <img src="https://img.icons8.com/color/48/amex.png" alt="" />
          <img src="https://img.icons8.com/color/48/apple-pay.png" alt="" />
          <img src="https://img.icons8.com/color/48/diners-club.png" alt="" />
          <img src="https://img.icons8.com/color/48/discover.png" alt="" />
          <img src="https://img.icons8.com/color/48/jcb.png" alt="" />
          <img src="https://img.icons8.com/color/48/mastercard.png" alt="" />
          <img src="https://img.icons8.com/color/48/visa.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;