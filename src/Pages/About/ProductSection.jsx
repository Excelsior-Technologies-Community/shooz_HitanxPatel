// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductSection.css";
import { Accordion, Form } from "react-bootstrap";
import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet"></link>

const brands = [
  "AirWalk","BoldWalks","ComfortCreek","CozySteps",
  "EcoStride","GlamStep","LuxeFeet","SprintMax",
  "TrailGear","UrbanStep"
];

const colors = [
  "black","blue","brown","tan","red","gray","pink",
  "lightgray","orange","purple","maroon","gold","white"
];

const moreFilters = [
  "Block Heel","Breathable","Canvas","Casual","Chelsea",
  "Chunky","Classic","Combat","Comfort","Cushioned",
  "Durable","Eco-Friendly","Elegant","Formal","Heels",
  "High-Top","Hiking","House","Leather","Lightweight",
  "Men","Mesh","Minimalist","Outdoor","Party",
  "Performance","Platform","Premium","Running","Safe",
  "Sandals","Slip-On","Slip-Resistant","Slippers","Soft",
  "Sparkling","Street Style","Suede","Tennis","Trail",
  "Unisex","Vegan","Vintage","Waterproof","White",
  "Women","Work"
];

const products = [
  {
    img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-18_be1e3b54-5764-4f9d-b77d-f23718b8bd6f.jpg?v=1731310946&width=540",
    img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-22.jpg?v=1731310991&width=540",
    price: 15,
    title: "Lightweight Running Shoes",
    brand: "SprintMax"
  },
  {
    img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-22.jpg?v=1731310991&width=540",
    img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-18_be1e3b54-5764-4f9d-b77d-f23718b8bd6f.jpg?v=1731310946&width=540",
    price: 15,
    title: "Elegant Block Heel Pumps",
    brand: "LuxeFeet"
  },
   {
    img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-18_be1e3b54-5764-4f9d-b77d-f23718b8bd6f.jpg?v=1731310946&width=540",
    img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-22.jpg?v=1731310991&width=540",
    price: 15,
    title: "Lightweight Running Shoes",
    brand: "SprintMax"
  },
  {
    img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-22.jpg?v=1731310991&width=540",
    img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-18_be1e3b54-5764-4f9d-b77d-f23718b8bd6f.jpg?v=1731310946&width=540",
    price: 15,
    title: "Elegant Block Heel Pumps",
    brand: "LuxeFeet"
  },
   {
    img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-18_be1e3b54-5764-4f9d-b77d-f23718b8bd6f.jpg?v=1731310946&width=540",
    img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-22.jpg?v=1731310991&width=540",
    price: 15,
    title: "Lightweight Running Shoes",
    brand: "SprintMax"
  },
  {
    img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-22.jpg?v=1731310991&width=540",
    img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-18_be1e3b54-5764-4f9d-b77d-f23718b8bd6f.jpg?v=1731310946&width=540",
    price: 15,
    title: "Elegant Block Heel Pumps",
    brand: "LuxeFeet"
  },
   {
    img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-18_be1e3b54-5764-4f9d-b77d-f23718b8bd6f.jpg?v=1731310946&width=540",
    img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-22.jpg?v=1731310991&width=540",
    price: 15,
    title: "Lightweight Running Shoes",
    brand: "SprintMax"
  },
  {
    img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-22.jpg?v=1731310991&width=540",
    img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-18_be1e3b54-5764-4f9d-b77d-f23718b8bd6f.jpg?v=1731310946&width=540",
    price: 15,
    title: "Elegant Block Heel Pumps",
    brand: "LuxeFeet"
  },
   {
    img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-18_be1e3b54-5764-4f9d-b77d-f23718b8bd6f.jpg?v=1731310946&width=540",
    img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-22.jpg?v=1731310991&width=540",
    price: 15,
    title: "Lightweight Running Shoes",
    brand: "SprintMax"
  },
  {
    img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-22.jpg?v=1731310991&width=540",
    img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-18_be1e3b54-5764-4f9d-b77d-f23718b8bd6f.jpg?v=1731310946&width=540",
    price: 15,
    title: "Elegant Block Heel Pumps",
    brand: "LuxeFeet"
  },
   {
    img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-18_be1e3b54-5764-4f9d-b77d-f23718b8bd6f.jpg?v=1731310946&width=540",
    img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-22.jpg?v=1731310991&width=540",
    price: 15,
    title: "Lightweight Running Shoes",
    brand: "SprintMax"
  },
  {
    img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-22.jpg?v=1731310991&width=540",
    img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-18_be1e3b54-5764-4f9d-b77d-f23718b8bd6f.jpg?v=1731310946&width=540",
    price: 15,
    title: "Elegant Block Heel Pumps",
    brand: "LuxeFeet"
  }
];

const ProductSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [showAllColors, setShowAllColors] = useState(false);
  const [showAllFilters, setShowAllFilters] = useState(false);
  return (
    <div className="container product-section_wrapper">
      <div className="row">

        <div className="col-md-3 product-section_sidebar">

          <h5 className="fw-semibold mb-3 product-section_title">Filter:</h5>

          <Accordion defaultActiveKey="0" alwaysOpen>

            <Accordion.Item eventKey="0">
              <Accordion.Header>Collection</Accordion.Header>
              <Accordion.Body>
                <ul className="list-unstyled small">
                  <li>Athletic Footwear (8)</li>
                  <li>Boots for Every Occasion (8)</li>
                  <li>Luxury Leather Shoes (8)</li>
                  <li>Sandals & Slides (8)</li>
                  <li>Sneakerhead’s Haven (10)</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Availability</Accordion.Header>
              <Accordion.Body>
                <Form.Check label="In stock (15)" />
                <Form.Check label="Out of stock (10)" />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Price</Accordion.Header>
              <Accordion.Body>

                <Form.Range />

                <div className="d-flex gap-2 mt-2">
                  <Form.Control placeholder="$ 0" />
                  <Form.Control placeholder="$ 25.00" />
                </div>

              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Brand</Accordion.Header>

              <Accordion.Body>

                {(showAll ? brands : brands.slice(0, 5)).map((b, i) => (
                  <Form.Check key={i} label={b} />
                ))}

                <p
                  className="product-section_show"
                  onClick={() => setShowAll(!showAll)}
                >
                  {showAll ? "- Show less" : "+ Show more"}
                </p>

              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>Category</Accordion.Header>
              <Accordion.Body>
                <Form.Check label="Fragrance Oil (2)" />
                <Form.Check label="Hair Care (1)" />
                <Form.Check label="Makeup (7)" />
                <Form.Check label="Skin Care (6)" />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>Color</Accordion.Header>

              <Accordion.Body>

                <div className="d-flex flex-wrap gap-2">

                  {(showAllColors ? colors : colors.slice(0, 7)).map((c, i) => (
                    <div
                      key={i}
                      className="color-circle"
                      style={{ background: c }}
                    ></div>
                  ))}

                </div>

                <p
                  className="product-section_show"
                  onClick={() => setShowAllColors(!showAllColors)}
                >
                  {showAllColors ? "- Show less" : "+ Show more"}
                </p>

              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="6">
              <Accordion.Header>Material</Accordion.Header>

              <Accordion.Body>
                <Form.Check label="Material 1 (1)" />
                <Form.Check label="Material 2 (1)" />
                <Form.Check label="Material 3 (1)" />
                <Form.Check label="Material 4 (1)" />
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="7">
              <Accordion.Header>More filters</Accordion.Header>

              <Accordion.Body>

                {(showAllFilters ? moreFilters : moreFilters.slice(0, 8)).map((f, i) => (
                  <Form.Check key={i} label={f} />
                ))}

                <p
                  className="product-section_show"
                  onClick={() => setShowAllFilters(!showAllFilters)}
                >
                  {showAllFilters ? "- Show less" : "+ Show more"}
                </p>

              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="8">
              <Accordion.Header>Size</Accordion.Header>
              <Accordion.Body>

                <div className="d-flex gap-2">
                  <button className="btn btn-outline-secondary btn-sm">S</button>
                  <button className="btn btn-outline-secondary btn-sm">M</button>
                  <button className="btn btn-outline-secondary btn-sm">L</button>
                </div>

              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="9">
              <Accordion.Header>Product type</Accordion.Header>
              <Accordion.Body>
                <Form.Check label="Boots (2)" />
                <Form.Check label="Sneakers (3)" />
                <Form.Check label="Sandals (2)" />
                <Form.Check label="Running Shoes (2)" />
              </Accordion.Body>
            </Accordion.Item>

          </Accordion>

        </div>

        <div className="col-md-9 product-section_main">

          <div className="product-section_topbar d-flex justify-content-between align-items-center mb-3">

            <div className="product-section_view">
              <i className="bi bi-grid"></i>
              <i className="bi bi-list"></i>
            </div>

            <div className="product-section_sort d-flex align-items-center gap-3">
              
              <div className="product-section_sortby">
                <span>Sort By: </span>
                <select>
                  <option>Price, low to high</option>
                  <option>Price, high to low</option>
                  <option>Newest</option>
                </select>
              </div>

              <div className="product-section_count">
                {products.length} Products
              </div>

            </div>

          </div>

          <div className="mobile-topbar d-flex justify-content-between align-items-center">

            <div className="filter-btn">
              <i className="bi bi-sliders"></i> Filter and sort
            </div>

            <div className="product-count">
              {products.length} Products
            </div>

          </div>

          <div className="product-section_products row">

            {products.map((item, index) => (
              <div className="col-lg-4 col-6 mb-4" key={index}>
                <div className="product-card">
                  
                  <div className="product-img-wrapper">
                    <img src={item.img1} className="product-img primary-img" />
                    <img src={item.img2} className="product-img hover-img" />
                  </div>

                  <div className="product-info">
                    <p className="product-price">${item.price}</p>
                    <h5 className="product-title">{item.title}</h5>
                    <p className="product-brand">{item.brand}</p>
                  </div>

                  <div className="product-hover-actions">

                    <div className="hover-line"></div>

                    <div className="hover-actions">
                      <div className="add-to-cart">
                        <i className="bi bi-cart"></i> ADD TO CART
                      </div>

                      <div className="icons">
                        <i className="bi bi-eye"></i>
                        <i className="bi bi-heart"></i>
                        <i className="bi bi-arrow-left-right"></i>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            ))}

            <div className="product-pagination d-flex justify-content-center mt-4">

              <button className="page-btn active">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">
                <i className="bi bi-chevron-right"></i>
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductSection;