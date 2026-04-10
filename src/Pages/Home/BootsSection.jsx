import React from "react";
import "./BootsSection.css";

const data = [
  {
    id: 1,
    title: "Athletic Footwear",
    count: 8,
    img: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-5.png?v=1731658002&width=720"
  },
  {
    id: 2,
    title: "Luxury Leather Shoes",
    count: 8,
    img: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-6.png?v=1731658012&width=540"
  },
  {
    id: 3,
    title: "Sustainable Footwear",
    count: 8,
    img: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-1.png?v=1731657959&width=540",
  },
  {
    id: 4,
    title: "Sandals & Slides",
    count: 8,
    img: "https://qx-shooz.myshopify.com/cdn/shop/collections/col-2.png?v=1731657969&width=720"
  }
];

const BootsSection = () => {
  return (
    <div className="boots-section container my-5">

      <div className="boots-header text-center">
        <p className="boots-subtitle">
          STYLISH AND COMFORTABLE FOR EVERY SEASON
        </p>

        <h1 className="boots-title">Boots & Booties</h1>

        <p className="boots-desc">
          Check out our collection of the top New Products
          <br />
          that encourage conversion.
        </p>
      </div>

      <div className="boots-slider">
        {data.map((item) => (
          <div className="boots-slide" key={item.id}>
            <div className="boots-card">

              <img src={item.img} alt="" className="boots-img" />

              <div className="boots-overlay">
                <span className="boots-label">
                    {item.title} <span className="count">{item.count}</span>
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default BootsSection;