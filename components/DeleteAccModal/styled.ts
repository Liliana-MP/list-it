import styled from "styled-components/native";
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

export const ModalContainer = styled.View<ModalProps>`
  background-color: ${(props) => props.color};
  width: 80%;
  height: 25%;
  padding: 30px 20px;
  border-radius: 20px;
  ${boxShadow}
  justify-content: center;
`;

export const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 40px 0px 40px;
`;
