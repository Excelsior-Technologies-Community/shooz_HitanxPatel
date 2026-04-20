import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductSection.css";

const products = [
  {
    id: 1,
    name: "Lightweight Running Shoes",
    price: "$0.00",
    brand: "SprintMax",
    img: "https://qx-shooz.myshopify.com/cdn/shop/files/product-21_3ab22edc-32aa-4831-beb5-7ff416b17834.jpg?v=1731311666&width=540",
    soldOut: true,
  },
  {
    id: 2,
    name: "Elegant Block Heel Pumps",
    price: "$15.00",
    brand: "LuxeFeet",
    img: "https://qx-shooz.myshopify.com/cdn/shop/files/product-23_fdf5f73d-c3b8-465f-b59d-a8e6afc8e7b9.jpg?v=1731311481&width=540",
  },
  {
    id: 3,
    name: "Cushioned Trail Running Shoes",
    price: "$15.00",
    brand: "TrailGear",
    img: "https://qx-shooz.myshopify.com/cdn/shop/files/product-18_31b99edb-0192-4e99-a026-cbd70e3a5624.jpg?v=1731311357&width=540",
  },
];

const ProductSection = () => {
  return (
    <div className="container product-section_wrapper">
      <div className="row">

        {/* Sidebar */}
        <div className="col-md-3 product-section_sidebar">
          <h5 className="product-section_title">Filter:</h5>

          <div className="product-section_filter-block">
            <h6>Collection</h6>
            <ul className="list-unstyled">
              <li>Athletic Footwear</li>
              <li>Boots for Every Occasion</li>
              <li>Luxury Leather Shoes</li>
              <li>Sandals & Slides</li>
            </ul>
          </div>

          <div className="product-section_filter-block">
            <h6>Availability</h6>
            <div>
              <input type="checkbox" /> In Stock
            </div>
            <div>
              <input type="checkbox" /> Out of Stock
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="col-md-9">
          <div className="row">

            {products.map((item) => (
              <div
                key={item.id}
                className="col-md-4 product-section_card"
              >
                <div className="product-section_item">

                  {item.soldOut && (
                    <span className="product-section_badge">
                      SOLD OUT
                    </span>
                  )}

                  <img
                    src={item.img}
                    alt={item.name}
                    className="img-fluid product-section_img"
                  />

                  <div className="product-section_info">
                    <p className="product-section_price">
                      {item.price}
                    </p>
                    <h6 className="product-section_name">
                      {item.name}
                    </h6>
                    <p className="product-section_brand">
                      {item.brand}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductSection;