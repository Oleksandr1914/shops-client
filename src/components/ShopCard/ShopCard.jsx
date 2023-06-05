import { ImageCard, Card, ProductName, Button } from "./ShopCard.styled";
import { useShopContext } from "../../hook/useShopContext";

const ShopCard = ({ card }) => {
  const { productsToCart, setProductsToCart } = useShopContext();

  const addToCart = (product) => {
    const someProduct = productsToCart.find((el) => el.title === card.title);
    if (!someProduct) {
      return setProductsToCart([...productsToCart, product]);
    }
  };

  return (
    <Card>
      <ImageCard src={card.photo} alt="" />
      <ProductName>{card.title}</ProductName>
      <Button onClick={() => addToCart(card)}>add to cart</Button>
    </Card>
  );
};

export default ShopCard;
