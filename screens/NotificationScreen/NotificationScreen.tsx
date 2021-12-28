import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ImageBackground, Text, TouchableOpacity } from "react-native";
import { CogIcon } from "react-native-heroicons/outline";
import { ScreenRoute, TabRoute } from "../../navigation/constants";
import { RootTabParamList } from "../../navigation/types";
import * as S from "../ListScreen/styled";

type NotificationScreenProps = NativeStackScreenProps<
  RootTabParamList,
  TabRoute.NOTIFICATION_SCREEN
>;

const NotificationScreen = ({ navigation }: NotificationScreenProps) => {
  return (
    <S.Container>
      <ImageBackground
        source={require("../../assets/images/marble-white.jpg")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <Text>This is NotificationScreen</Text>
      </ImageBackground>
    </S.Container>
  );
};

export default NotificationScreen;
