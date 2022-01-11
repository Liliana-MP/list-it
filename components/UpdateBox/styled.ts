import styled from "styled-components/native";
import theme from "../../theme";

export const Box = styled.View`
  width: 380px;
  height: 250px;
  border-radius: 5px;
  margin: 20px 15px 40px 15px;
  background-color: ${theme.primary.color};
  align-items: flex-start;
  justify-content: center;
`;

export const BoxContainer = styled.View`
  margin: 2px 0px 2px 15px;
`;

export const DateContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const NameContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 50px;
`;
