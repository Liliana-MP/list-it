import styled from "styled-components/native";

interface ModalProps {
  color: string;
}

export const ModalBackground = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.View<ModalProps>`
  background-color: ${(props) => props.color};
  width: 80%;
  padding: 30px 20px;
`;
