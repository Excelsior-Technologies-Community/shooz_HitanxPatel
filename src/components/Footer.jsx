import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footerSection_main">
      <div className="container footerSection_container">
        <div className="row">

          <div className="col-md-2 footerSection_column">
            <h5 className="footerSection_heading">INFORMATION</h5>
            <ul className="footerSection_list">
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Returns Policy</li>
              <li>Shipping Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="col-md-2 footerSection_column">
            <h5 className="footerSection_heading">QUICK LINKS</h5>
            <ul className="footerSection_list">
              <li>My Account</li>
              <li>My Cart</li>
              <li>Size Chart</li>
              <li>Wishlist</li>
              <li>Gift Card</li>
            </ul>
          </div>

          <div className="col-md-4 footerSection_column footerSection_center">
            <img
              src="https://qx-shooz.myshopify.com/cdn/shop/files/logo.png?v=1731409697&width=360"
              alt="Shooz Logo"
              className="footerSection_logoImg"
            />
            <p className="footerSection_text">T: + (08) 9055 0269</p>
            <p className="footerSection_text">E: example@example.com</p>
            <p className="footerSection_text">
              50 Porana Place, West Casuarinas,<br />
              Western Australia, Australia.
            </p>
          </div>

          <div className="col-md-2 footerSection_column">
            <h5 className="footerSection_heading">CATEGORIES</h5>
            <ul className="footerSection_list">
              <li>Athletic Footwear</li>
              <li>Boots for Every Occasion</li>
              <li>Luxury Leather Shoes</li>
              <li>Sandals & Slides</li>
              <li>Sneakerhead’s Haven</li>
            </ul>
          </div>

          <div className="col-md-2 footerSection_column">
            <h5 className="footerSection_heading">SUPPORT</h5>
            <ul className="footerSection_list">
              <li>Contact Us</li>
              <li>Newsletter</li>
              <li>Gift Cards</li>
              <li>Sign In</li>
              <li>My Account</li>
            </ul>
          </div>

        </div>

        <div className="footerSection_line"></div>
        
        <div className="footerSection_bottom d-flex justify-content-between align-items-center mt-4">
          <p className="footerSection_copy">
            Copyright © 2024 <span>Shooz</span>. All rights reserved
          </p>

          <div className="footerSection_payments">
            <img src="https://th.bing.com/th/id/OIP.C3222CedyFhyZRW3cTngvgHaEK?w=254&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="amex" />
            <img src="https://th.bing.com/th/id/OIP.ipFGYm-xObTWv_PwkdR8qAHaD4?w=311&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="applepay" />
            <img src="https://th.bing.com/th/id/OIP._-s7zkre50Risn8PY6f_1gHaEp?w=281&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="diners" />
            <img src="https://th.bing.com/th/id/OIP.rhBuhX59xogJpPvaov14vAHaEL?w=314&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="discover" />
            <img src="https://th.bing.com/th/id/OIP.oEaAjHOSipPY0Np_5hJ3agHaFu?w=182&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="jcb" />
            <img src="https://th.bing.com/th/id/OIP.LLvOaGmNm0xBODBrYJBUjgHaF5?w=218&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="mastercard" />
            <img src="https://th.bing.com/th/id/OIP.xL03XjjZ7shCuc0VYH4jOwHaCR?w=318&h=107&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="visa" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;