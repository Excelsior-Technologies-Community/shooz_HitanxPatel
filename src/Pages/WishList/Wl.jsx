import React from "react";
import "./Wl.css";

const Wishlist = () => {
  return (
    <div className="Wishlist_container">
      <div className="container">

        <div className="Wishlist_breadcrumb">
          <span className="Wishlist_home">Home</span>
          <span className="Wishlist_slash"> / </span>
          <span className="Wishlist_current">Wishlist</span>
        </div>

        <h2 className="Wishlist_title text-center">Wishlist</h2>

        <div className="Wishlist_emptyWrapper text-center">
            <div className="Wishlist_emptyBox">
                There are no products in your wishlist!
            </div>
        </div>

      </div>
    </div>
  );
};

export default Wishlist;