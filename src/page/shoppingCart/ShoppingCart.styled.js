import styled from "styled-components";

export const ContainerCart = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  padding: 5px 10px;
`;

export const BoxCart = styled.div`
  display: flex;
  gap: 15px;
`;

export const BoxSubmit = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 30px;
  margin-top: 40px;
`;

export const ButtonSubmit = styled.button`
  padding: 4px 8px;
  border-color: gray;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`;

export const TextPrice = styled.p`
  font-size: 18px;
`;
