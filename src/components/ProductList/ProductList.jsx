import React from "react";
import { ProductListContainer } from "./ProductList.styled";
import CardInToShoppengCart from "../CardInTeShoppengCart/CardInTeShoppengCart";
import { useShopContext } from "../../hook/useShopContext";

const ProductList = () => {
  const { productsToCart } = useShopContext();
  // const p = productsToCart.filter((e) => e.title !== card.title);
  return (
    <ProductListContainer>
      {productsToCart.map((el) => {
        return <CardInToShoppengCart key={el._id} card={el} />;
      })}
    </ProductListContainer>
  );
};

export default ProductList;
