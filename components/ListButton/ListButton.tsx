import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { ChevronRightIcon } from "react-native-heroicons/outline";
import theme from "../../theme";
import Typography from "../Typography";
import * as S from "./styled";

interface ListButtonProps {
  title: string;
  onPress: () => void;
  type: "list" | "item";
  color?: string;
  isChecked?: boolean;
}

const ListButton = ({
  title,
  onPress,
  type,
  color = "white",
  isChecked = false,
}: ListButtonProps) => {
  if (type === "list") {
    return (
      <S.Button color={color} onPress={onPress}>
        <Typography title={title} size={20} weight="light" />
        <S.IconContainer>
          <ChevronRightIcon color="black" />
        </S.IconContainer>
      </S.Button>
    );
  } else if (type === "item") {
    return (
      <S.ItemButton color={color}>
        <Typography title={title} size={20} weight="light" />
        <S.IconContainer>
          <BouncyCheckbox
            onPress={onPress}
            textStyle={{ textDecorationLine: "none" }}
            fillColor={theme.secondary.color}
            isChecked={isChecked}
            iconStyle={{
              borderRadius: 5,
            }}
          />
        </S.IconContainer>
      </S.ItemButton>
    );
  }
  return (
    <S.Button color={color} onPress={onPress}>
      <Typography title={title} size={20} weight="light" />
      <S.IconContainer>
        <ChevronRightIcon color="black" />
      </S.IconContainer>
    </S.Button>
  );
};

export default ListButton;
