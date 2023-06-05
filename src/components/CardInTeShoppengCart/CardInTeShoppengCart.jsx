import React, { useEffect, useState } from "react";
import {
  ContainerCard,
  PhotoCard,
  InfoProductBlock,
  NameProduct,
  PriceProduct,
  Input,
} from "./CardInTeShoppengCart.styled";
import { useShopContext } from "../../hook/useShopContext";

const CardInToShoppengCart = ({ card }) => {
  const [quantityproduct, setquantityproduct] = useState(1);

  const { productsToCart, setProductsToCart } = useShopContext();

  useEffect(() => {
    const newArray = productsToCart?.map((e) => {
      if (e.title === card.title) {
        return { ...e, quantity: quantityproduct };
      }
      return e;
    });
    setProductsToCart(newArray);
  }, [quantityproduct]);

  return (
    <ContainerCard>
      <PhotoCard src={card.photo} />
      <InfoProductBlock>
        <NameProduct>{card.title}</NameProduct>
        <PriceProduct>{card.price}</PriceProduct>
        <Input
          type="number"
          name="number"
          value={quantityproduct}
          onChange={(e) => setquantityproduct(e.target.value)}
        />
      </InfoProductBlock>
    </ContainerCard>
  );
};

export default CardInToShoppengCart;
