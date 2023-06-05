import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 10px;
`;

export const HeadBox = styled.div`
  width: 100%;
  padding: 20px 15px;
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  color: blue;
  text-decoration: none;
  cursor: pointer;
  font-size: 20px;
  &.active {
    color: blue;
    text-decoration: underline;
  }
  &:not(:last-child)::after {
    content: "";
    margin-left: 20px;
    border-right: 2px solid gray;
  }
`;
