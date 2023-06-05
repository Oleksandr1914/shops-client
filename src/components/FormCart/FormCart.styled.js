import styled from "styled-components";

export const ContainerForm = styled.div`
  padding: 30px 10px;
  padding-bottom: 80px;
  width: calc(50vw - 27px);
  height: calc(100vh - 240px);
  border: 2px solid gray;
  border-radius: 5px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  width: calc(100% - 50px);
  padding: 4px 12px;
  border-color: gray;
  border-radius: 4px;
  :not(:last-child) {
    margin-bottom: 30px;
  }
`;
