import React from "react";
import { View, Text } from "react-native";
import * as S from "./styled";

interface ButtonProps {
  title: string;
  color: string;
  textColor: string;
  type: string;
  onPress: () => void;
}

const Button = ({ type, title, color, textColor, onPress }: ButtonProps) => {
  if (type === "Regular") {
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
