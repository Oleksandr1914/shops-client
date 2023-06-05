import styled from "styled-components";

export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 30px 10px;
  width: calc(50vw - 27px);
  height: calc(100vh - 240px);
  border: 2px solid gray;
  border-radius: 5px;
  overflow-y: scroll;
`;
