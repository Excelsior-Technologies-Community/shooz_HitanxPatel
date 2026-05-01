import React, { useState, useEffect } from "react";
import "./TimelessSection.css";

const products = [
  {
    id: 1,
    price: "$21.00",
    title: "Classic Leather Sneakers",
    brand: "UrbanStep",
    img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=540",
    img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-18_31b99edb-0192-4e99-a026-cbd70e3a5624.jpg?v=1731311357&width=540",
  },
  {
    id: 2,
    price: "$15.00",
    title: "Cushioned Trail Running Shoes",
    brand: "TrailGear",
    img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-18_31b99edb-0192-4e99-a026-cbd70e3a5624.jpg?v=1731311357&width=540",
    img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=540",
  },
  {
    id: 3,
    price: "$25.00",
    title: "High-Top Canvas Sneakers",
    brand: "TrendyFeet",
    img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=540",
    img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-21_3ab22edc-32aa-4831-beb5-7ff416b17834.jpg?v=1731311666&width=540",
  },
  {
    id: 4,
    price: "$0.00",
    title: "Lightweight Running Shoes",
    brand: "SprintMax",
    badge: "SOLD OUT",
    img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-21_3ab22edc-32aa-4831-beb5-7ff416b17834.jpg?v=1731311666&width=5405",
    img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=540",
  },
];

const TimelessSection = () => {
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [activeCategory, setActiveCategory] = useState("bag");

  useEffect(() => {
        setCurrent(0);  
    }, [activeCategory]);

  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth >= 1200) setItemsPerView(4);
      else if (window.innerWidth >= 992) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };

    updateItems();
    window.addEventListener("resize", updateItems);

    return () => window.removeEventListener("resize", updateItems);
  }, []);

let displayProducts = [...products];

if (activeCategory === "glasses") {
  displayProducts.reverse();
}

if (activeCategory === "trending") {
  displayProducts = [
    ...products.slice(2),
    ...products.slice(0, 2),
  ];
}

  const totalSlides = Math.ceil(products.length / itemsPerView);

  return (
    <div className="container timelessSection_wrapper">
      <div className="text-center">
        <h2 className="timelessSection_title">
          Timeless Elegance, Modern Twist
        </h2>

        <p className="timelessSection_subtitle">
          Experience the perfect blend of timeless elegance and modern flair.
        </p>

        <div className="timelessSection_filter">
            <span
                className={activeCategory === "bag" ? "active" : ""}
                onClick={() => setActiveCategory("bag")}
            >
                BAG
            </span>{" "}
            /{" "}
            <span
                className={activeCategory === "glasses" ? "active" : ""}
                onClick={() => setActiveCategory("glasses")}
            >
                GLASSES
            </span>{" "}
            /{" "}
            <span
                className={activeCategory === "trending" ? "active" : ""}
                onClick={() => setActiveCategory("trending")}
            >
                TRENDING
            </span>
        </div>
      </div>

      <div className="timeless-slider mt-4">
        <div
          className="timeless-track"
          style={{
            transform: `translateX(-${current * (100 / itemsPerView)}%)`,
          }}
        >
          {displayProducts.map((item) => (
            <div
              className="timeless-slide"
              style={{ minWidth: `${100 / itemsPerView}%` }}
              key={item.id}
            >
              <div className="you-may-like-card position-relative">
                {item.badge && (
                  <div className="you-may-like-badge">{item.badge}</div>
                )}

                <div className="you-may-like-img-wrapper">
                  <img
                    src={item.img1}
                    alt=""
                    className="you-may-like-img you-may-like-primary-img"
                  />
                  <img
                    src={item.img2}
                    alt=""
                    className="you-may-like-img you-may-like-hover-img"
                  />
                </div>

                <div className="you-may-like-info">
                  <p className="you-may-like-price">{item.price}</p>

                  <h5 className="you-may-like-title-text">{item.title}</h5>

                  <p className="you-may-like-brand">{item.brand}</p>

                  <div className="you-may-like-hover-line"></div>

                  <div className="you-may-like-hover-actions">
                    <div className="you-may-like-hover-actions-inner">
                      <div className="you-may-like-add-to-cart">
                        Add to cart
                      </div>

                      <div className="you-may-like-icons">
                        <i className="bi bi-heart"></i>
                        <i className="bi bi-arrow-left-right"></i>
                        <i className="bi bi-search"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {totalSlides > 1 && (
            <div className="timeless-dots">
                {Array.from({ length: totalSlides }).map((_, index) => (
                <span
                    key={index}
                    className={current === index ? "active" : ""}
                    onClick={() => setCurrent(index)}
                ></span>
                ))}
            </div>
        )}
      </div>
    </div>
  );
};

export default TimelessSection;
