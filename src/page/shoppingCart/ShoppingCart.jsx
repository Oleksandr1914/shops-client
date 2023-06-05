import { useShopContext } from "../../hook/useShopContext";
import FormCart from "../../components/FormCart/FormCart";
import {
  ContainerCart,
  BoxSubmit,
  BoxCart,
  ButtonSubmit,
  TextPrice,
} from "./ShoppingCart.styled";
import ProductList from "../../components/ProductList/ProductList";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { useEffect } from "react";

const ShoppingCart = () => {
  const { productsToCart, formObject, calc, setCalc } = useShopContext();

  const postToAdd = {
    price: calc,
    ownerEmail: formObject.email,
    ownerPhone: formObject.phone,
    ownerAddress: formObject.address,
    ownerName: formObject.name,
    order: productsToCart,
  };
  const options = {
    method: "POST",
    body: JSON.stringify(postToAdd),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };

  useEffect(() => {
    const newPriceToCarts = productsToCart.map((e) => {
      if (e.quantity > 1) {
        return { ...e, price: e.price * e.quantity };
      }
      return e;
    });
    const total = newPriceToCarts.reduce((total, el) => {
      return total + el.price;
    }, 0);
    setCalc(total);
  }, [productsToCart]);

  const onSubmit = () => {
    postToAdd.ownerEmail.length === 0 ||
    postToAdd.ownerPhone.length === 0 ||
    postToAdd.ownerAddress.length === 0 ||
    postToAdd.ownerName.length === 0
      ? Notify.warning("Please fill in all fields!!!")
      : fetch(`https://shops-ohdj.onrender.com/api/cart`, options)
          .then((response) => response.json())
          .then((res) => {
            return console.log(res);
          });
  };

  return (
    <ContainerCart>
      <BoxCart>
        <FormCart />
        <ProductList />
      </BoxCart>
      <BoxSubmit>
        <ButtonSubmit onClick={onSubmit}>Submit</ButtonSubmit>
        <TextPrice>Total price: {calc}</TextPrice>
      </BoxSubmit>
    </ContainerCart>
  );
};

export default ShoppingCart;
