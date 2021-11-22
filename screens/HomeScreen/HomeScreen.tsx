import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";
import { ScreenRoute } from "../../navigation/constants";
import { RootStackParamList } from "../../navigation/types";
import * as S from "./styled";

type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoute.HOME_SCREEN
>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <S.Container>
      <Header
        handleSettingsOnPress={() =>
          navigation.navigate(ScreenRoute.LIST_SETTINGS_SCREEN)
        }
      />
      <Text>This is HomeScreen</Text>
    </S.Container>
  );
};

export default HomeScreen;
