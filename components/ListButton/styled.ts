import styled from "styled-components/native";
import theme from "../../theme";
import { boxShadow } from "../../theme/shadows";

interface ButtonProps {
  color: string;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  margin: 8px 15px;
  height: 60px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  ${boxShadow};
`;

export const ItemButton = styled.View<ButtonProps>`
  margin: 8px 15px;
  height: 60px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  ${boxShadow};
`;

export const IconContainer = styled.View`
  background-color: transparent;
  align-items: flex-end;
  right: 10px;
  position: absolute;
`;

export const TextContainer = styled.View`
  max-width: 90%;
`;
