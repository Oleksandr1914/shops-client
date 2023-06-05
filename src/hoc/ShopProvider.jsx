import { createContext, useState } from "react";

export const ShopContext = createContext(null);

const ShopProvider = ({ children }) => {
  const [cards, setCards] = useState([]);
  const [productsToCart, setProductsToCart] = useState([]);
  const [formObject, setFormObject] = useState({});
  const [calc, setCalc] = useState(0);

  const value = {
    cards,
    setCards,
    productsToCart,
    setProductsToCart,
    formObject,
    setFormObject,
    calc,
    setCalc,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopProvider;
