import styled from "styled-components/native";
import theme from "../../theme";

export const Box = styled.View`
  width: 380px;
  height: 250px;
  border-radius: 5px;
  margin: 15px 15px;
  background-color: ${theme.primary.color};
  align-items: flex-start;
`;

export const BoxContainer = styled.View`
  margin: 10px 0px 0px 15px;
`;

export const DateContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 50px;
`;
