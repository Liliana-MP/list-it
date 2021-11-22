import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {
  ChevronDoubleRightIcon,
  CogIcon,
  SearchIcon,
} from "react-native-heroicons/outline";
import * as S from "./styled";

interface HeaderProps {
  handleSettingsOnPress?: () => void;
}

const Header = ({ handleSettingsOnPress }: HeaderProps) => {
  return (
    <S.Container>
      {handleSettingsOnPress && (
        <TouchableOpacity onPress={handleSettingsOnPress}>
          <CogIcon height={30} width={30} color="white" />
        </TouchableOpacity>
      )}
    </S.Container>
  );
};

export default Header;
