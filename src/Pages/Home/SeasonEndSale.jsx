import React from "react";
import "./SeasonEndSale.css";

const products = [
  { id: 1, name: "Classic White Tennis Sneakers", price: "$25.00", img: "https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=150" },
  { id: 2, name: "Waterproof Hiking Boots", price: "$25.00", img: "https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=150" },
  { id: 3, name: "Classic Leather Sneakers", price: "$21.00", img: "https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=150" },

  { id: 4, name: "Classic White Tennis Sneakers", price: "$25.00", img: "https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=150" },
  { id: 5, name: "Waterproof Hiking Boots", price: "$25.00", img: "https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=150" },
  { id: 6, name: "Classic Leather Sneakers", price: "$21.00", img: "https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=150" },

  { id: 7, name: "Classic White Tennis Sneakers", price: "$25.00", img: "https://qx-shooz.myshopify.com/cdn/shop/files/product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg?v=1731311278&width=150" },
  { id: 8, name: "Waterproof Hiking Boots", price: "$25.00", img: "https://qx-shooz.myshopify.com/cdn/shop/files/product-17.jpg?v=1731315215&width=150" },
  { id: 9, name: "Classic Leather Sneakers", price: "$21.00", img: "https://qx-shooz.myshopify.com/cdn/shop/files/product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg?v=1731311211&width=150" },
];

const SeasonSale = () => {
  return (
    <div className="season-sale-section py-5">
      <div className="container">

        <div className="text-center mb-5">
          <p className="sale-subtitle">SEASON'S END SALE</p>
          <h2 className="sale-title">
            Huge discounts on last season’s styles
          </h2>
          <p className="sale-desc">
            Himenaeos nascetur tristique consequat mus ad.<br />
            Accumsan fringilla in laoreet id bibendum et.
          </p>
        </div>

        <div className="row">
          {[0, 1, 2].map((colIndex) => (
            <div className="col-12 col-md-6 col-lg-4" key={colIndex}>
              {products
                .slice(colIndex * 3, colIndex * 3 + 3)
                .map((item) => (
                  <div className="product-item d-flex align-items-center mb-4" key={item.id}>
                    <img src={item.img} alt="" className="me-3 product-img-sale" />
                    <div>
                      <h6 className="product-title">{item.name}</h6>
                      <p className="product-price">{item.price}</p>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SeasonSale;