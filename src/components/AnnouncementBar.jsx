import React from "react";
import "./AnnouncementBar.css";

function AnnouncementBar() {
  return (
    <div className="AnnouncementBar">
      <div className="marquee">
        <div className="marquee-content">
          <span>
            Get 15% off your first purchase when you sign up for our newsletter. <u>Dismiss</u>
          </span>
          <span>
            Enjoy 20% off your entire order with the code <b>SHOEFRESH20</b>.<u>Dismiss</u>
          </span>
        </div>
      </div>
    </div>
  );
}

export default AnnouncementBar;