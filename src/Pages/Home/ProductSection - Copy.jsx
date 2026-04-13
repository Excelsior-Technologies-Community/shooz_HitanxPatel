import React, { useState } from "react";
import "./ProductSection.css";

const products = [
  {
    id: 1,
    name: "Classic White Tennis Sneakers",
    brand: "SportyFeet",
    price: "$25.00",
    img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19.jpg",
    img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-23.jpg",
  },
  {
    id: 2,
    name: "Waterproof Hiking Boots",
    brand: "TrailGear",
    price: "$25.00",
    img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-23.jpg",
    img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19.jpg",
  },
  {
    id: 3,
    name: "Classic Leather Sneakers",
    brand: "UrbanStep",
    price: "$21.00",
    img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19.jpg",
    img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-23.jpg",
  },
  {
    id: 4,
    name: "High-Top Canvas Sneakers",
    brand: "TrendyFeet",
    price: "$25.00",
    img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-23.jpg",
    img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19.jpg",
  },
];

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState("best");

  return (
    <section className="productSection_container">

      <div className="container">

        {/* Header */}
        <div className="productSection_header text-center">

          <p className="productSection_subtitle">
            THE LATEST TRENDS IN ATHLETIC FOOTWEAR
          </p>

          <h1 className="productSection_title">
            Sneakers & Kicks
          </h1>

          <div className="productSection_tabs">

            <span
              className={`productSection_tab ${activeTab === "featured" ? "active" : ""}`}
              onClick={() => setActiveTab("featured")}
            >
              FEATURED
            </span>

            <span
              className={`productSection_tab ${activeTab === "new" ? "active" : ""}`}
              onClick={() => setActiveTab("new")}
            >
              NEW ARRIVALS
            </span>

            <span
              className={`productSection_tab ${activeTab === "best" ? "active" : ""}`}
              onClick={() => setActiveTab("best")}
            >
              BEST SELLER
            </span>

          </div>
        </div>

        {/* Slider */}
        <div className="productSection_slider">

          {products.map((item) => (
            <div className="productSection_slide" key={item.id}>

              <div className="productSection_card">

                <div className="productSection_imgWrapper">

                  <img
                    src={item.img1}
                    className="productSection_img primary-img"
                    alt=""
                  />

                  <img
                    src={item.img2}
                    className="productSection_img hover-img"
                    alt=""
                  />

                </div>

                <div className="productSection_info">
                  <p className="productSection_price">{item.price}</p>
                  <h6 className="productSection_name">{item.name}</h6>
                  <p className="productSection_brand">{item.brand}</p>
                </div>

                {/* Hover Actions */}
                <div className="productSection_hoverActions">

                  <div className="productSection_line"></div>

                  <div className="productSection_actions">
                    <span className="add-cart">
                      ADD TO CART
                    </span>

                    <div className="icons">
                      <i className="far fa-eye"></i>
                      <i className="far fa-heart"></i>
                      <i className="fas fa-random"></i>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default ProductSection;