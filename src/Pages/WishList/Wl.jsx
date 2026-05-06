import React from "react";
import "./Wl.css";
import { useWishlist } from "../../Context/WishlistContext";

const Wishlist = () => {

  const { wishlistItems, removeFromWishlist } = useWishlist();

  return (
    <div className="Wishlist_container">
      <div className="container">

        <div className="Wishlist_breadcrumb">
          <span className="Wishlist_home">Home</span>
          <span className="Wishlist_slash"> / </span>
          <span className="Wishlist_current">Wishlist</span>
        </div>

        <h2 className="Wishlist_title text-center">Wishlist</h2>

        {/* <div className="Wishlist_emptyWrapper text-center">
            <div className="Wishlist_emptyBox">
                There are no products in your wishlist!
            </div>
        </div> */}

        {wishlistItems.length === 0 ? (
          <div className="Wishlist_emptyWrapper text-center">
            <div className="Wishlist_emptyBox">
              There are no products in your wishlist!
            </div>
          </div>
        ) : (
          <div className="row mt-5">
            {wishlistItems.map((item) => (
              <div className="col-md-3 mb-4" key={item.id}>
                <div className="card p-3 text-center">
                  <img
                    src={item.image}
                    alt=""
                    className="img-fluid"
                  />

                  <h5 className="mt-3">{item.title}</h5>

                  <p>{item.price}</p>

                  <button
                    className="btn btn-danger mt-2"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default Wishlist;