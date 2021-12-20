import React from "react";
import theme from "../../theme";
import Typography from "../Typography";
import * as S from "./styled";

interface ButtonProps {
  title: string;
  color?: string;
  textColor: string;
  type?: "regular" | "square";
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
        <Typography size={20} title={title} color={textColor} weight="light" />
      </S.RegularButton>
    );
  } else if (type === "square") {
    return (
      <S.SquareButton color={color} onPress={onPress}>
        <Typography
          size={19}
          title={title}
          color={textColor}
          weight="semi-bold"
        />
      </S.SquareButton>
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
