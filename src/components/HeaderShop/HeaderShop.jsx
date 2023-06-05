import { Outlet } from "react-router-dom";
import { HeadBox, Container, StyledLink } from "./HeaderShop.styled";

const HeaderShop = () => {
  return (
    <Container>
      <HeadBox>
        <StyledLink to="/mcdonalds">Shop</StyledLink>
        <StyledLink to="/shoppingCart">Shoping Cart</StyledLink>
      </HeadBox>
      <Outlet />
    </Container>
  );
};

export default HeaderShop;
