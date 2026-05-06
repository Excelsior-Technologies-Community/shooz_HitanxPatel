import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {

    const alreadyExist = cartItems.find(
      (item) => item.id === product.id
    );

    if (alreadyExist) {

      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );

      setCartItems(updatedCart);

    } else {

      setCartItems([
        ...cartItems,
        { ...product, qty: 1 }
      ]);

    }
  };

  const removeFromCart = (id) => {

    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(updatedCart);
  };

  const increaseQty = (id) => {

    const updatedCart = cartItems.map((item) =>
        item.id === id
        ? { ...item, qty: item.qty + 1 }
        : item
    );

    setCartItems(updatedCart);
    };

   const decreaseQty = (id) => {

    const updatedCart = cartItems.map((item) =>
        item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    );

    setCartItems(updatedCart);
    };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty
       }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};