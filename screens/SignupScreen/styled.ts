import { Video } from "expo-av";
import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
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
  font-size: 80px;
  color: ${theme.secondary.color};
  font-family: "Satisfy-Regular";
`;

export const InputFieldContainer = styled.View`
  margin-top: 40px;
  margin-bottom: 40px;
`;
