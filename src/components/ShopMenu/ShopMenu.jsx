import React, { useEffect } from "react";
import { ShopMenuContainer } from "./ShopMenu.styled";
import ShopCard from "../ShopCard/ShopCard";
import { useShopContext } from "../../hook/useShopContext";
import { useLocation } from "react-router-dom";

const ShopMenu = () => {
  const { cards, setCards } = useShopContext();
  const location = useLocation();

  const shopName = location.pathname.slice(1, location.pathname.length);

  useEffect(() => {
    fetch(`https://shops-ohdj.onrender.com/api/shop/${shopName}`)
      .then((response) => response.json())
      .then((res) => {
        return setCards(res.data);
      });
  }, []);

  return (
    <ShopMenuContainer>
      {cards?.map((el) => (
        <ShopCard key={el._id} card={el} />
      ))}
    </ShopMenuContainer>
  );
};

export default ShopMenu;
