import React, { useState } from "react";

export const picsContext = React.createContext();
export const loadingContext = React.createContext();
export const cartItemsContext = React.createContext();

const Store = ({ children }) => {
  const [pics, setPics] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <picsContext.Provider value={[pics, setPics]}>
      <loadingContext.Provider value={[loading, setLoading]}>
        <cartItemsContext.Provider value={[cartItems, setCartItems]}>
          {children}
        </cartItemsContext.Provider>
      </loadingContext.Provider>
    </picsContext.Provider>
  );
};

export default Store;
