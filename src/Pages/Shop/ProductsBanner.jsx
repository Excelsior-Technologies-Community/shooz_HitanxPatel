import React from "react";
import "./ProductsBanner.css";

function ProductsBanner() {
  return (
    <section className="productsBanner">
      
      <div className="productsBanner_breadcrumb container">
        <span className="productsBanner_home">Home</span>
        <span className="productsBanner_separator"> / </span>
        <span className="productsBanner_current">Products</span>
      </div>

      <div className="productsBanner_wrapper">
        <img
          src="https://qx-shooz.myshopify.com/cdn/shop/files/col-2.png?v=1731657939&width=2048"
          alt="Products Banner"
          className="productsBanner_img"
        />

        <h1 className="productsBanner_title">Products</h1>
      </div>

    </section>
  );
}

export default ProductsBanner;