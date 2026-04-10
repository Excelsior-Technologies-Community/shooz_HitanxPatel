import React, { useState } from "react";
import "./ProductSection.css";

const products = [
  {
    id: 1,
    name: "Classic White Tennis Sneakers",
    brand: "SportyFeet",
    price: "$25.00",
    img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg",
    img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg",
  },
  {
    id: 2,
    name: "Waterproof Hiking Boots",
    brand: "TrailGear",
    price: "$25.00",
    img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg",
    img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg",
  },
  {
    id: 3,
    name: "Classic Leather Sneakers",
    brand: "UrbanStep",
    price: "$21.00",
    img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg",
    img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg",
  },
  {
    id: 4,
    name: "High-Top Canvas Sneakers",
    brand: "TrendyFeet",
    price: "$25.00",
    img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg",
    img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg",
  },
];

const ProductSection = () => {
  const [activeTab, setActiveTab] = useState("featured");

  return (
    <div className="container my-5">

      <div className="product-header text-center">
        <p className="sub-title">
          THE LATEST TRENDS IN ATHLETIC FOOTWEAR
        </p>

        <h1 className="main-title">Sneakers & Kicks</h1>

        <div className="tabs">
          <span
            className={activeTab === "featured" ? "tab active" : "tab"}
            onClick={() => setActiveTab("featured")}
          >
            FEATURED
          </span>

          <span
            className={activeTab === "new" ? "tab active" : "tab"}
            onClick={() => setActiveTab("new")}
          >
            NEW ARRIVALS
          </span>

          <span
            className={activeTab === "best" ? "tab active" : "tab"}
            onClick={() => setActiveTab("best")}
          >
            BEST SELLER
          </span>
        </div>
      </div>

      <div className="product-slider">
        {products.map((item) => (
          <div className="product-slide" key={item.id}>
            <div className="product-card">

              <div className="product-img-wrapper">
                <img src={item.img1} alt="" className="product-img primary-img" />
                <img src={item.img2} alt="" className="product-img hover-img" />
              </div>

              <div className="product-info">
                <p className="product-price">{item.price}</p>
                <h6 className="product-title">{item.name}</h6>
                <p className="product-brand">{item.brand}</p>
              </div>

                <div className="product-hover-actions">

                    <div className="hover-line"></div>

                    <div className="hover-actions">
                        <span className="add-cart">
                            <i className="fas fa-shopping-cart"></i> ADD TO CART
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
  );
};

export default ProductSection;