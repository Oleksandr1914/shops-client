import SidebarShops from "../../components/SidebarShop/SidebarShops";
import { ContainerShops } from "./Shops.styled";
import { Outlet } from "react-router-dom";

const Shops = () => {
  return (
    <ContainerShops>
      <SidebarShops />
      <Outlet />
    </ContainerShops>
  );
};

export default Shops;
