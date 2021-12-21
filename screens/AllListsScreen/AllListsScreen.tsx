import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ImageBackground, Text, TouchableOpacity } from "react-native";
import { CogIcon } from "react-native-heroicons/outline";
import { ScreenRoute } from "../../navigation/constants";
import { RootStackParamList } from "../../navigation/types";
import * as S from "../ListScreen/styled";

type AllListsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoute.LIST_SCREEN
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
            <CogIcon height={30} width={30} color="black" />
          </S.TopBar>
        </TouchableOpacity>
        <Text>This is AllListsScreen</Text>
      </ImageBackground>
    </S.Container>
  );
};

export default AllListsScreen;
