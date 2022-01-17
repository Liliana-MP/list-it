import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  align-items: flex-start;
  flex-direction: row;
  margin-left: 15px;
`;

export const TextContainer = styled.View`
  margin-left: 20px;
`;

export const Title = styled.Text`
  font-size: 80px;
  color: ${theme.secondary.color};
  font-family: "Satisfy-Regular";
`;

export const TitleContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 0px;
`;
