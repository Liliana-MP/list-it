import { Video } from "expo-av";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const VideoBackground = styled(Video)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
