import styled from "styled-components/native";
import theme from "../../theme";
import { boxShadow, roundShadow } from "../../theme/shadows";

export const Container = styled.View``;

export const AddButton = styled.TouchableOpacity`
  top: -30px;
  justify-content: center;
  align-items: center;
  background-color: ${theme.primary.color};
  width: 70px;
  height: 70px;
  border-radius: 35px;
  ${roundShadow}
`;
