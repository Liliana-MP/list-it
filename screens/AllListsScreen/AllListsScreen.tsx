import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ImageBackground, Text, TouchableOpacity } from "react-native";
import { CogIcon } from "react-native-heroicons/outline";
import Header from "../../components/Header";
import ListButton from "../../components/ListButton";

import { ScreenRoute } from "../../navigation/constants";
import { RootStackParamList } from "../../navigation/types";
import theme from "../../theme";
import * as S from "../ListScreen/styled";

type AllListsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoute.MAIN_SCREEN
>;

const AllListsScreen = ({ navigation }: AllListsScreenProps) => {
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
          <S.TopBar>
            <CogIcon height={35} width={35} color="black" />
          </S.TopBar>
        </TouchableOpacity>
        <Header color={theme.secondary.color} title="Your Lists" />
        <ListButton title="List 1" />
      </ImageBackground>
    </S.Container>
  );
};

export default AllListsScreen;
