import React from "react";
import theme from "../../theme";
import * as S from "./styled";

interface TypographyProps {
  title: string;
  color?: string;
  weight?: "bold" | "semi-bold" | "light" | "thin";
  size: number;
}

const weightClasses = {
  bold: "Montserrat-Bold",
  "semi-bold": "Montserrat-SemiBold",
  light: "Montserrat-Light",
  thin: "Montserrat-Thin",
};

const Typography = ({ title, weight = "light", size }: TypographyProps) => {
  return (
    <S.AppText size={size} weight={weightClasses[weight]}>
      {title}
    </S.AppText>
  );
};

export default Typography;
