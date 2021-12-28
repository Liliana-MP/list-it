import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ImageBackground, Text, TouchableOpacity } from "react-native";
import { CogIcon } from "react-native-heroicons/outline";
import { ScreenRoute, TabRoute } from "../../navigation/constants";
import { RootTabParamList } from "../../navigation/types";
import * as S from "../ListScreen/styled";

type AccountScreenProps = NativeStackScreenProps<
  RootTabParamList,
  TabRoute.ACCOUNT_SCREEN
>;

const AccountScreen = ({ navigation }: AccountScreenProps) => {
  return (
    <S.Container>
      <ImageBackground
        source={require("../../assets/images/marble-white.jpg")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <Text>This is AccountScreen</Text>
      </ImageBackground>
    </S.Container>
  );
};

export default AccountScreen;
