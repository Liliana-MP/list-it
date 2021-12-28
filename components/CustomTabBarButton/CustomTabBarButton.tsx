import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { PlusIcon, XIcon } from "react-native-heroicons/outline";
import * as S from "./styled";

interface CustomTabBarButtonProp {
  onPress: () => void;
  type?: string;
  color: string;
}

const CustomTabBarButton = ({
  onPress,
  type,
  color,
}: CustomTabBarButtonProp) => {
  if (type === "add") {
    return (
      <S.AddButton color={color} onPress={onPress}>
        <PlusIcon color="white" size={40} />
      </S.AddButton>
    );
  }
  return (
    <S.AddButton color={color} onPress={onPress}>
      <PlusIcon color="white" size={40} />
    </S.AddButton>
  );
};

export default CustomTabBarButton;
