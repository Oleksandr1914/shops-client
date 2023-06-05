import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ShopsSideBar = styled.div`
  width: 250px;
  height: calc(100vh - 75px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 5px;
  border: 2px solid gray;
  border-radius: 5px;
`;

export const TitleShops = styled.h1`
  font-size: 20px;
  color: #726262;
`;

export const ListShops = styled.ul`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ItemShops = styled.li`
  display: flex;

  padding: 0;
  border: 2px solid gray;
  border-radius: 3px;
`;

export const StyledShopLink = styled(NavLink)`
  width: 100%;
  padding: 4px 10px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  color: gray;
  &.active {
    background-color: #bab3b34f;
  }
`;
