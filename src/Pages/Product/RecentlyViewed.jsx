import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RecentlyViewed.css";

const RecentlyViewed = () => {
  const products = [
    {
      id: 1,
      name: "Cushioned Trail Running Shoes",
      price: "$15.00",
      img: "https://cdn.shopify.com/s/files/1/0714/6517/3218/files/product-5_d3ebfc44-e7bd-4fa9-8459-4fc99b71cacf.jpg?v=1731311341",
    },
    {
      id: 2,
      name: "High-Top Canvas Sneakers",
      price: "$25.00",
      img: "https://cdn.shopify.com/s/files/1/0714/6517/3218/files/product-7_bf9fee80-650d-4775-a219-0eaccf66d47b.jpg?v=1731311538",
    },
    {
      id: 3,
      name: "Chunky Platform Sandals",
      price: "$25.00",
      oldPrice: "$32.00",
      img: "https://cdn.shopify.com/s/files/1/0714/6517/3218/files/product-2_f21b4635-7aa2-414f-b44c-6ce8171394ed.jpg?v=1731310979",
    },
    {
      id: 4,
      name: "Waterproof Hiking Boots",
      price: "$25.00",
      img: "https://cdn.shopify.com/s/files/1/0714/6517/3218/files/product-17.jpg?v=1731315215",
    },
    {
      id: 5,
      name: "Lightweight Running Shoes",
      price: "$0.00",
      img: "https://cdn.shopify.com/s/files/1/0714/6517/3218/files/product-8_c70f2fa3-a720-4f73-a2b0-0e0e01967d19.jpg?v=1731311653",
    },
    {
      id: 6,
      name: "Breathable Mesh Slip-Ons",
      price: "$25.00",
      img: "https://cdn.shopify.com/s/files/1/0714/6517/3218/files/product-1_831d6162-6f44-4896-ac4c-88eb8a35a6a9.jpg?v=1731310932",
    },
  ];

  return (
    <div className="container my-5 RecentlyViewed_container">
      <h2 className="text-center mb-4 RecentlyViewed_title">
        Recently viewed
      </h2>

      <div className="row g-4">
        {products.map((item) => (
          <div className="col-lg-2 col-6" key={item.id}>
            <div className="card border-0 RecentlyViewed_card text-center">
              
              <div className="RecentlyViewed_imgWrapper position-relative">
                <img
                  src={item.img}
                  alt={item.name}
                  className="img-fluid RecentlyViewed_img"
                />
              </div>

              <div className="card-body p-2">
                <p className="mb-1 RecentlyViewed_name">
                  {item.name}
                </p>

                <p className="RecentlyViewed_price mb-0">
                  {/* <span className="fw-bold">
                    {item.price}
                  </span> */}
                  <span
                        className={`fw-bold ${
                        item.id === 3 ? "text-danger" : "text-dark"
                        }`}
                    >
                        {item.price}
                    </span>
                  {item.oldPrice && (
                    <span className="text-muted text-decoration-line-through ms-2">
                      {item.oldPrice}
                    </span>
                  )}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;