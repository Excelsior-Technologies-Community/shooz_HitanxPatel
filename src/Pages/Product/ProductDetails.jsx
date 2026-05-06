import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProductDetails.css";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { useWishlist } from "../../Context/WishlistContext";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const ProductDetails = () => {

  const { addToWishlist, wishlistItems } = useWishlist();
  const { addToCart } = useCart();

  const product = {
  id: 1,
  title: "Breathable Mesh Slip-Ons",
  price: "$25.00",
  image: "https://qx-shooz.myshopify.com/cdn/shop/files/product-1_831d6162-6f44-4896-ac4c-88eb8a35a6a9.jpg?v=1731310932",
  };

  const alreadyInWishlist = wishlistItems.find(
    (item) => item.id === product.id
  );

  const images = [
    "https://qx-shooz.myshopify.com/cdn/shop/files/product-1_831d6162-6f44-4896-ac4c-88eb8a35a6a9.jpg?v=1731310932",
    "https://qx-shooz.myshopify.com/cdn/shop/files/product-18_be1e3b54-5764-4f9d-b77d-f23718b8bd6f.jpg?v=1731310946",
    "https://qx-shooz.myshopify.com/cdn/shop/files/product-19.jpg?v=1731310945",
    "https://qx-shooz.myshopify.com/cdn/shop/files/product-20.jpg?v=1731310945",
    "https://qx-shooz.myshopify.com/cdn/shop/files/product-21.jpg?v=1731310946",
  ];

  const [mainImage, setMainImage] = useState(images[0]);
  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState("ship");

  const handlePrev = () => {
    const currentIndex = images.indexOf(mainImage);
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setMainImage(images[prevIndex]);
  };

  const handleNext = () => {
    const currentIndex = images.indexOf(mainImage);
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setMainImage(images[nextIndex]);
  };

  return (
    <div className="container product-details__container py-5">
      <div className="row">
        
        <div className="product-details__breadcrumb mb-3">
          <span className="product-details__breadcrumb-home">Home</span>
          <span className="product-details__breadcrumb-separator"> / </span>
          <span className="product-details__breadcrumb-current">
            Breathable Mesh Slip-Ons
          </span>
        </div>

        <div className="col-md-6">
          <div className="product-details__image-box position-relative text-center">

            <button
              className="product-details__arrow product-details__arrow--left"
              onClick={handlePrev}
            >
              ‹
            </button>

            <img src={mainImage} alt="product" className="img-fluid" />

            <button
              className="product-details__arrow product-details__arrow--right"
              onClick={handleNext}
            >
              ›
            </button>
          </div>

          <div className="d-flex mt-3 gap-2 product-details__thumbnails">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumb"
                className={`product-details__thumb ${
                  mainImage === img ? "active" : ""
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="col-md-6">
          <div className="product-details__right">

            <h2 className="product-details__title">
              {product.title}
            </h2>

            <h4 className="product-details__price">{product.price}</h4>

            <div className="product-details__action-section d-flex align-items-center gap-3 flex-wrap">
              
              <div className="product-details__qty-box d-flex align-items-center">
                <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)}>+</button>
              </div>  

              {/* <button className="btn product-details__add-btn">
                ADD TO CART
              </button> */}

              <button className="btn product-details__add-btn" onClick={() => addToCart(product)}>
                ADD TO CART
              </button>

              <button className="btn product-details__buy-btn">
                BUY IT NOW
              </button>

              <div className="product-details__wishlist d-flex gap-4">  
                {alreadyInWishlist ? (
                  <Link
                    to="/wishlist"
                    className="text-dark text-decoration-none"
                  >
                    ❤️ Go To Wishlist
                  </Link>
                ) : (
                  <span
                    onClick={() => addToWishlist(product)}
                    style={{ cursor: "pointer" }}
                  >
                    ♡ Add To Wishlist
                  </span>
                )}
                <span>⇄ Compare</span>
              </div>
            </div>

            <div className="product-details__info">
              <p><strong>Vendor:</strong> AirWalk</p>
              <p><strong>Type:</strong> Slip-Ons</p>
              <p><strong>Sku:</strong> null</p>
              <p><strong>Available:</strong> Available</p>
            </div>

            <div className="product-details__accordion">

              <div className="product-details__accordion-item">
                <div 
                  className="product-details__accordion-header"
                  onClick={() => setOpen(open === "ship" ? "" : "ship")}
                >
                  🚚 Shipping information
                  <span>{open === "ship" ? "-" : "+"}</span>
                </div>

                {open === "ship" && (
                  <div className="product-details__accordion-body">
                    <p>- No EU import duties.</p>
                    <p>- Ships within 1-2 business days.</p>
                    <p>- Ships in recyclable packaging.</p>
                  </div>
                )}
              </div>

              <div className="product-details__accordion-item">
                <div 
                  className="product-details__accordion-header"
                  onClick={() => setOpen(open === "care" ? "" : "care")}
                >
                  ⚕ Care Guide
                  <span>{open === "care" ? "-" : "+"}</span>
                </div>

                {open === "care" && (
                  <div className="product-details__accordion-body">
                    <p>Regularcare. Use a slightly damp, soft and lint-free cloth for regular dust removal. Always clean in the direction of the grain.</p>
                  </div>
                )}
              </div>

            </div>

            <div className="product-details__extra">
              <p>🍃 55% Linen, 45% Rayon</p>
              <p>🔒 Secure payment</p>
              <p>🛡 2 Year Warranty</p>
            </div>

            <div className="product-details__engagement">

              <p className="product-details__viewing">
                👀 <span>13</span> customers are viewing this product
              </p>

              <p className="product-details__sold">
                🔥 30 SOLD IN LAST 18 HOURS
              </p>

              <p className="product-details__shipping-offer">
                📦 Spend $1,000.00 for Free Shipping
              </p>

              <div className="product-details__social d-flex gap-4 align-items-center">

                <span className="d-flex align-items-center gap-2">
                  <FaFacebookF />
                  Share
                </span>

                <span className="d-flex align-items-center gap-2">
                  <FaTwitter />
                  Tweet
                </span>

                <span className="d-flex align-items-center gap-2">
                  <FaPinterestP />
                  Pin it
                </span>

              </div>

              <div className="product-details__payment-box">
                <p className="product-details__payment-title">
                  Guarantee safe checkout
                </p>

                <div className="product-details__payment-icons d-flex gap-3 flex-wrap justify-content-center">
                  <img src="https://qx-shooz.myshopify.com/cdn/shop/files/payments.jpg?v=1731652750&width=540" alt="" />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;