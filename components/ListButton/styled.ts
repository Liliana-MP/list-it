import styled from "styled-components/native";
import theme from "../../theme";
import { boxShadow } from "../../theme/shadows";

export const Button = styled.TouchableOpacity`
  margin: 8px 15px;
  height: 60px;
  border-radius: 5px;
  background-color: ${theme.primary_lighter.color};
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  ${boxShadow};
`;

export const ArrowContainer = styled.View`
  background-color: ${theme.primary_lighter.color};
  align-items: flex-end;
  right: 10px;
  position: absolute;
`;
