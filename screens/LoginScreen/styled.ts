import { Video } from "expo-av";
import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const InputFieldContainer = styled.View`
  margin-top: 40px;
`;

export const VideoBackground = styled(Video)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const Title = styled.Text`
  margin-top: 80px;
  margin-bottom: 40px;
  font-size: 100px;
  color: ${theme.secondary.color};
  font-family: "Satisfy-Regular";
`;

export const ButtonContainer = styled.View`
  margin: 100px;
`;

export const TextButtonContainer = styled.View`
  margin-top: 20px;
`;
