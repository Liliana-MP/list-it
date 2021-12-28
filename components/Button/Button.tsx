import React from "react";
import { CheckIcon } from "react-native-heroicons/outline";
import theme from "../../theme";
import Typography from "../Typography";
import * as S from "./styled";

interface ButtonProps {
  title?: string;
  color?: string;
  textColor?: string;
  borderColor?: string;
  type?: "regular" | "square" | "icon";
  onPress: () => void;
}

const Button = ({
  type = "regular",
  title = "Title",
  color = theme.primary.color,
  textColor,
  onPress,
  borderColor,
}: ButtonProps) => {
  if (type === "regular") {
    return (
      <S.RegularButton color={color} onPress={onPress}>
        <Typography size={20} title={title} color={textColor} weight="light" />
      </S.RegularButton>
    );
  } else if (type === "square") {
    return (
      <S.SquareButton color={color} onPress={onPress}>
        <Typography
          size={15}
          title={title}
          color={textColor}
          weight="semi-bold"
        />
      </S.SquareButton>
    );
  } else if (type === "icon") {
    return (
      <S.IconButton borderColor={borderColor} color={color} onPress={onPress}>
        <CheckIcon color="white" size={60} />
      </S.IconButton>
    );
  } else {
    return (
      <S.RegularButton color={color} onPress={onPress}>
        <Typography
          size={20}
          title={title}
          color={textColor}
          weight="semi-bold"
        />
      </S.RegularButton>
    );
  }
};

export default Button;
