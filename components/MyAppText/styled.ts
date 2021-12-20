import styled from "styled-components/native";

interface TextProps {
  color?: string;
  weight: string;
  size: number;
}

export const TextContainer = styled.View``;

export const AppText = styled.Text<TextProps>`
  font-family: ${(props) => props.weight};
  font-size: ${(props) => props.size}px;
`;
