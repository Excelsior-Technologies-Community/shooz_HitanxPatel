import React from "react";
import "./ProductSection.css";

const products = [
  {
    id: 1,
    name: "Classic White Tennis Sneakers",
    brand: "SportyFeet",
    price: "$25.00",
    image1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=540",
    image2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=540",
  },
  {
    id: 2,
    name: "Waterproof Hiking Boots",
    brand: "TrailGear",
    price: "$25.00",
    image1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=540",
    image2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=540",
  },
  {
    id: 3,
    name: "Classic Leather Sneakers",
    brand: "UrbanStep",
    price: "$21.00",
    image1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=540",
    image2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=540",
  },
  {
    id: 4,
    name: "High-Top Canvas Sneakers",
    brand: "TrendyFeet",
    price: "$25.00",
    image1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg?v=1731311295&width=540",
    image2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-23_8eeee338-7bad-4c2b-b296-6804d886a41a.jpg?v=1731315325&width=540",
  },
];

const ProductSection = () => {
  return (
    <div className="product-section container text-center">

      <p className="product-subtitle">THE LATEST TRENDS IN ATHLETIC FOOTWEAR</p>
      <h2 className="product-title">Sneakers & Kicks</h2>

      <div className="product-tabs">
        <span className="tab active">FEATURED</span>
        <span className="tab">NEW ARRIVALS</span>
        <span className="tab">BEST SELLER</span>
      </div>

      <div className="row product-row">
        {products.map((item) => (
          <div className="col-lg-3 col-md-6 mb-4" key={item.id}>
            <div className="product-card">

              <div className="product-img-wrapper">
                <img
                  src={item.image1}
                  alt={item.name}
                  className="product-img default-img"
                />
                <img
                  src={item.image2}
                  alt={item.name}
                  className="product-img hover-img"
                />
              </div>

              <div className="product-info">
                <p className="product-price">{item.price}</p>
                <h5 className="product-name">{item.name}</h5>
                <p className="product-brand">{item.brand}</p>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProductSection;