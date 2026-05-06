import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (product) => {
    const alreadyAdded = wishlistItems.find(
      (item) => item.id === product.id
    );

    if (!alreadyAdded) {
      setWishlistItems([...wishlistItems, product]);
    }   
  };

  const removeFromWishlist = (id) => {
  const updatedWishlist = wishlistItems.filter(
    (item) => item.id !== id
  );

  setWishlistItems(updatedWishlist);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  return useContext(WishlistContext);
};