import { useEffect, useState } from "react";
import {
  ShopsSideBar,
  TitleShops,
  ListShops,
  StyledShopLink,
  ItemShops,
} from "./SidebarShops.styled";
import { useShopContext } from "../../hook/useShopContext";

const SidebarShops = () => {
  const [shops, setShops] = useState([]);
  const { setCards } = useShopContext();

  useEffect(() => {
    fetch(`https://shops-ohdj.onrender.com/api/`)
      .then((response) => response.json())
      .then((res) => {
        return setShops(res.data);
      });
  }, []);

  const onShops = (title) => {
    fetch(`https://shops-ohdj.onrender.com/api/shop/${title}`)
      .then((response) => response.json())
      .then((res) => setCards(res.data));
  };

  return (
    <ShopsSideBar>
      <TitleShops>Shops</TitleShops>
      <ListShops>
        {shops?.map((el) => (
          <ItemShops key={el._id} onClick={() => onShops(el.title)}>
            <StyledShopLink to={el.title}>{el.title}</StyledShopLink>
          </ItemShops>
        ))}
      </ListShops>
    </ShopsSideBar>
  );
};

export default SidebarShops;
