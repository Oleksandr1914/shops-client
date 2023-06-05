import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  width: 100%;
  height: 160px;
  padding: 8px;
  padding-bottom: 20px;
  border: 2px solid gray;
  border-radius: 7px;
`;

export const PhotoCard = styled.img`
  width: 200px;
  margin: 0;
  border-radius: 3px;
`;

export const InfoProductBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  width: calc(100% - 218px);
`;

export const NameProduct = styled.p`
  font-size: 18px;
`;

export const PriceProduct = styled.p`
  margin-top: 8px;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 70px;
  margin-top: 15px;
  border-color: gray;
  border-radius: 4px;
`;
