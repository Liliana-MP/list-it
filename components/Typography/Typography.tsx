import React from "react";
import theme from "../../theme";
import * as S from "./styled";

interface TypographyProps {
  title: string;
  color?: string;
  weight?: "bold" | "semi-bold" | "light" | "thin";
  size: number;
  numberOfLines?: number;
}

const weightClasses = {
  bold: "Montserrat-Bold",
  "semi-bold": "Montserrat-SemiBold",
  light: "Montserrat-Light",
  thin: "Montserrat-Thin",
};

const Typography = ({
  title,
  weight = "light",
  size,
  color = "black",
  numberOfLines,
}: TypographyProps) => {
  return (
    <S.AppText
      size={size}
      weight={weightClasses[weight]}
      color={color}
      numberOfLines={numberOfLines}
    >
      {title}
    </S.AppText>
  );
};

export default Typography;
