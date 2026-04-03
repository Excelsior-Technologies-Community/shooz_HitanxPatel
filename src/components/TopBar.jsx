import React from "react";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="topbar">
      
      <div className="topbar-left">
        One Day Delivery Available
      </div>

      <div className="topbar-right">
        
        <div className="auth-links">
          <a href="#">Login</a>
          <span>/</span>
          <a href="#">Register</a>
        </div>

        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
        </div>

      </div>

    </div>
  );
};

export default TopBar;