import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { PlusIcon } from "react-native-heroicons/outline";
import * as S from "./styled";

interface CustomTabBarButtonProp {
  onPress: () => void;
}

const CustomTabBarButton = ({ onPress }: CustomTabBarButtonProp) => {
  return (
    <S.AddButton onPress={onPress}>
      <PlusIcon color="white" size={40} />
    </S.AddButton>
  );
};

export default CustomTabBarButton;
