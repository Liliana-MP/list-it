import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ImageBackground, Text, TouchableOpacity } from "react-native";
import { ScreenRoute } from "../../navigation/constants";
import { RootStackParamList } from "../../navigation/types";
import * as S from "./styled";
import Button from "../../components/Button/Button";
import ListScreen from "../ListScreen/ListScreen";
import MyAppText from "../../components/MyAppText";

type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoute.HOME_SCREEN
>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <ImageBackground
      source={require("../../assets/images/marble-white.jpg")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <S.TextContainer>
        <MyAppText size={50} title="Hejsan" weight="thin" />
      </S.TextContainer>
      <S.Container>
        <Button
          title="To list screen"
          textColor="black"
          onPress={() => navigation.navigate(ScreenRoute.LIST_SCREEN)}
        />
      </S.Container>
    </ImageBackground>
  );
};

export default HomeScreen;
