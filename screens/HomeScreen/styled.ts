import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  align-items: flex-start;
  flex-direction: row;
  margin: 5px 0px 20px 15px;
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
  margin-top: 20px;
  margin-bottom: 20px;
`;
