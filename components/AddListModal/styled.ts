import styled from "styled-components/native";
import theme from "../../theme";
import { boxShadow } from "../../theme/shadows";

interface ModalProps {
  color: string;
}

export const ModalBackground = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.View`
  align-items: flex-start;
  width: 90%;
  margin-bottom: 10px;
`;

export const ModalContainer = styled.View<ModalProps>`
  width: 80%;
  padding: 30px 20px;
  background-color: ${(props) => props.color};
  border-radius: 20px;
  align-items: center;
  ${boxShadow}
`;
