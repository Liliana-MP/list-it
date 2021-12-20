import React from "react";
import theme from "../../theme";
import * as S from "./styled";

interface ButtonProps {
  title: string;
  color?: string;
  textColor: string;
  type?: "regular" | "rounded";
  onPress: () => void;
}

const Button = ({
  type = "regular",
  title,
  color = theme.primary.color,
  textColor,
  onPress,
}: ButtonProps) => {
  if (type === "regular") {
    return (
      <S.RegularButton color={color} onPress={onPress}>
        <S.ButtonText textColor={textColor}>{title}</S.ButtonText>
      </S.RegularButton>
    );
  } else {
    return (
      <S.AddButton color={color} onPress={onPress}>
        <S.ButtonText textColor={textColor}>{title}</S.ButtonText>
      </S.AddButton>
    );
  }
};

export default Button;
