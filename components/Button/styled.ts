import styled from "styled-components/native";
import { boxShadow } from "../../theme/shadows";

interface ButtonProps {
  color: string;
}

interface ButtonTextProps {
  textColor: string;
}

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: center;
  padding: 10px 60px;
`;

export const RegularButton = styled.TouchableOpacity<ButtonProps>`
  margin: 5px 0px;
  border-radius: 5px;
  background-color: ${(props) => props.color};
  padding: 10px;
  align-items: center;
  width: 300px;
  height: 50px;
`;

export const SquareButton = styled.TouchableOpacity<ButtonProps>`
  margin: 5px 0px;
  border-radius: 8px;
  width: 115px;
  height: 115px;
  background-color: ${(props) => props.color};
  align-items: center;
  justify-content: center;
  ${boxShadow}
`;
