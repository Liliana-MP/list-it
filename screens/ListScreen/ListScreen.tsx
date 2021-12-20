import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ImageBackground, Text, TouchableOpacity } from "react-native";
import { CogIcon } from "react-native-heroicons/outline";
import { ScreenRoute } from "../../navigation/constants";
import { RootStackParamList } from "../../navigation/types";
import * as S from "./styled";

type ListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoute.LIST_SCREEN
>;

const ListScreen = ({ navigation }: ListScreenProps) => {
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
          <S.Header>
            <CogIcon height={30} width={30} color="black" />
          </S.Header>
        </TouchableOpacity>
        <Text>This is ListScreen</Text>
      </ImageBackground>
    </S.Container>
  );
};

export default ListScreen;
