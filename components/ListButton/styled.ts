import styled from "styled-components/native";
import { boxShadow } from "../../theme/shadows";

export const Container = styled.View`
  background-color: white;
  align-items: flex-end;
  margin: 8px 15px;
  width: 80%;
`;

export const Button = styled.TouchableOpacity`
  margin: 8px 15px;
  height: 60px;
  border-radius: 5px;
  background-color: white;
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  ${boxShadow};
`;
