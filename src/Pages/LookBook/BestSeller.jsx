import React, { useRef } from "react";
import "./BestSeller.css";

const BestSeller = () => {
    const scrollRef = useRef();

    const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };

  const products = [
    {
      id: 1,
      price: "$21.00",
      title: "Classic Leather Sneakers",
      brand: "UrbanStep",
      img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=540",
      img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=540",
    },
    {
      id: 2,
      price: "$25.00",
      title: "Classic White Tennis Sneakers",
      brand: "SportyFeet",
      img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=540",
      img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=540",
    },
    {
      id: 3,
      price: "$15.00",
      title: "Chunky Platform Sandals",
      brand: "BoldWalks",
      img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-22.jpg?v=1731310991&width=540",
      img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-18_31b99edb-0192-4e99-a026-cbd70e3a5624.jpg?v=1731311357&width=540",
    },
    {
      id: 4,
      price: "$15.00",
      title: "Cushioned Trail Running Shoes",
      brand: "TrailGear",
      img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-18_31b99edb-0192-4e99-a026-cbd70e3a5624.jpg?v=1731311357&width=540",
      img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-22.jpg?v=1731310991&width=540",
    },
    {
      id: 5,
      price: "$21.00",
      title: "Classic Leather Sneakers",
      brand: "UrbanStep",
      img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=540",
      img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=540",
    },
    {
      id: 6,
      price: "$25.00",
      title: "Classic White Tennis Sneakers",
      brand: "SportyFeet",
      img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg?v=1731311225&width=540",
      img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-19_49ae4265-2610-48a8-b934-1a24b6136832.jpg?v=1731311550&width=540",
    },
    {
      id: 7,
      price: "$15.00",
      title: "Chunky Platform Sandals",
      brand: "BoldWalks",
      img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-22.jpg?v=1731310991&width=540",
      img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-18_31b99edb-0192-4e99-a026-cbd70e3a5624.jpg?v=1731311357&width=540",
    },
    {
      id: 8,
      price: "$15.00",
      title: "Cushioned Trail Running Shoes",
      brand: "TrailGear",
      img1: "https://qx-shooz.myshopify.com/cdn/shop/files/product-18_31b99edb-0192-4e99-a026-cbd70e3a5624.jpg?v=1731311357&width=540",
      img2: "https://qx-shooz.myshopify.com/cdn/shop/files/product-22.jpg?v=1731310991&width=540",
    },
  ];

  return (
    <div className="you-may-like-wrapper">
      <div className="container">

        <h3 className="you-may-like-title">Best Seller</h3>

        <p className="you-may-like-subtitle">
            Discover Wellness in a Tropical Yoga Paradise
        </p>

        <button onClick={scrollLeft} className="scroll-btn left">
            <i className="fa-solid fa-chevron-left"></i>
        </button>

        <button onClick={scrollRight} className="scroll-btn right">
            <i className="fa-solid fa-chevron-right"></i>
        </button>
        
        <div className="you-may-like-scroll" ref={scrollRef}>

                {products.map((item) => (

                    <div className="you-may-like-card_1" key={item.id}>

                        <div className="you-may-like-img-wrapper">

                        {item.id === 3 && (
                            <span className="you-may-like-badge">-21%</span>
                        )}

                        <img
                            src={item.img1}
                            className="you-may-like-img you-may-like-primary-img"
                            alt=""
                        />
                        <img
                            src={item.img2}
                            className="you-may-like-img you-may-like-hover-img"
                            alt=""
                        />
                        </div>

                        <div className="you-may-like-info">
                        {/* <p className="you-may-like-price">{item.price}</p> */}
                        <p className="you-may-like-price">

                            {item.id === 3 ? (
                                <>
                                $15.00
                                <span className="you-may-like-old-price">$32.00</span>
                                </>
                            ) : (
                                item.price
                            )}

                            </p>
                        <h5 className="you-may-like-title-text">{item.title}</h5>
                        <span className="you-may-like-brand">{item.brand}</span>
                        </div>

                        <div className="you-may-like-hover-actions">

                        <div className="you-may-like-hover-line"></div>

                        <div className="you-may-like-hover-actions-inner">
                            
                            <div className="you-may-like-add-to-cart">
                            <i className="bi bi-cart"></i> ADD TO CART
                            </div>

                            <div className="you-may-like-icons">
                            <i className="bi bi-eye"></i>
                            <i className="bi bi-heart"></i>
                            <i className="bi bi-arrow-left-right"></i>
                            </div>

                        </div>

                        </div>

                    </div>
                ))}

        </div>

      </div>
    </div>
  );
};

export default BestSeller;