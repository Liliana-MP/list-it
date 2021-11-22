import { Video } from "expo-av";
import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const InputFieldContainer = styled.View`
  margin: 50px;
`;

export const VideoBackground = styled(Video)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const Title = styled.Text`
  margin: 20px;
  font-size: 70px;
  color: ${theme.secondary.color};
`;
