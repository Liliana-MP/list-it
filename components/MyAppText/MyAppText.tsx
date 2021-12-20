import React from "react";
import theme from "../../theme";
import * as S from "./styled";

interface TextProps {
  title: string;
  color?: string;
  weight?: "bold" | "semiBold" | "light" | "thin";
  type?: "header" | "normal";
  size: number;
}

const MyAppText = ({ title, weight = "light", size }: TextProps) => {
  if (weight === "bold") {
    return (
      <S.TextContainer>
        <S.AppText size={size} weight="Montserrat-Bold">
          {title}
        </S.AppText>
      </S.TextContainer>
    );
  } else if (weight === "semiBold") {
    return (
      <S.TextContainer>
        <S.AppText size={size} weight="Montserrat-SemiBold">
          {title}
        </S.AppText>
      </S.TextContainer>
    );
  } else if (weight === "light") {
    return (
      <S.TextContainer>
        <S.AppText size={size} weight="Montserrat-Light">
          {title}
        </S.AppText>
      </S.TextContainer>
    );
  } else if (weight === "thin") {
    return (
      <S.TextContainer>
        <S.AppText size={size} weight="Montserrat-Thin">
          {title}
        </S.AppText>
      </S.TextContainer>
    );
  }
  return (
    <S.TextContainer>
      <S.AppText size={size} weight="Montserrat-Light">
        {title}
      </S.AppText>
    </S.TextContainer>
  );
};

export default MyAppText;
