import { Dimensions } from "react-native";
import styled from "styled-components/native";
import theme from "../../theme";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
const width = screenWidth / 1.2;
const height = screenHeight / 4;

export const Box = styled.View`
  width: ${width}px;
  height: ${height}px;
  border-radius: 5px;
  margin: 0px 15px 40px 15px;
  background-color: ${theme.primary.color};
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const BoxContainer = styled.View`
  align-items: flex-start;
  justify-content: center;
  margin: 10px 0px 0px 20px;
  width: ${width}px;
  height: ${height}px;
`;

export const DateContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const NameContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 50px;
`;
