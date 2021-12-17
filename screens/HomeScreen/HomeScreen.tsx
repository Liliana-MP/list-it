import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ImageBackground, Text, TouchableOpacity } from "react-native";
import { CogIcon } from "react-native-heroicons/outline";
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
      <ImageBackground
        source={require("../../assets/images/marble-white.jpg")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenRoute.LIST_SETTINGS_SCREEN)}
        >
          <CogIcon height={30} width={30} color="white" />
        </TouchableOpacity>
        <Text>This is HomeScreen</Text>
      </ImageBackground>
    </S.Container>
  );
};

export default HomeScreen;
