import { Platform } from "react-native";
import { css } from "styled-components/native";

export const boxShadow = css`
  elevation: 5;
  shadow-color: ${Platform.select({ ios: "#000000", android: "#000000" })};
  shadow-offset: 5px 5px;
  shadow-opacity: 1;
  shadow-radius: 40px;
`;

export const roundShadow = css`
  elevation: 3;
  shadow-color: ${Platform.select({ ios: "#000000", android: "#000000" })};
  shadow-offset: 5px 5px;
  shadow-opacity: 1;
  shadow-radius: 40px;
`;
