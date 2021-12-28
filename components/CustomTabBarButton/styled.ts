import styled from "styled-components/native";
import theme from "../../theme";
import { boxShadow, roundShadow } from "../../theme/shadows";

interface AddButtonProps {
  color: string;
}

export const Container = styled.View``;

export const AddButton = styled.TouchableOpacity<AddButtonProps>`
  top: -25px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  width: 70px;
  height: 70px;
  border-radius: 35px;
  ${roundShadow}
`;
