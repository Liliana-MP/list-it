import React, { ReactNode } from "react";
import { CheckIcon, LogoutIcon } from "react-native-heroicons/outline";
import theme from "../../theme";
import Typography from "../Typography";
import * as S from "./styled";

interface ButtonProps {
  title?: string;
  color?: string;
  textColor?: string;
  borderColor?: string;
  type?: "regular" | "square" | "icon" | "s-regular" | "signOut";
  onPress: () => void;
  icon?: ReactNode;
}

const Button = ({
  type = "regular",
  title = "Title",
  color = theme.primary.color,
  textColor,
  onPress,
  borderColor = "transparent",
  icon = <CheckIcon size={60} color="white" />,
}: ButtonProps) => {
  if (type === "regular") {
    return (
      <S.RegularButton color={color} onPress={onPress}>
        <Typography size={20} title={title} color={textColor} weight="light" />
      </S.RegularButton>
    );
  } else if (type === "s-regular") {
    return (
      <S.SmallRegularButton color={color} onPress={onPress}>
        <Typography
          size={20}
          title={title}
          color={textColor}
          weight="semi-bold"
        />
      </S.SmallRegularButton>
    );
  } else if (type === "signOut") {
    return (
      <S.SignOutButton color={color} onPress={onPress}>
        <S.SignOutContainer>
          <Typography
            size={20}
            title={title}
            color={textColor}
            weight="semi-bold"
          />
          <LogoutIcon color="white" size={30} />
        </S.SignOutContainer>
      </S.SignOutButton>
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
        {icon && icon}
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
