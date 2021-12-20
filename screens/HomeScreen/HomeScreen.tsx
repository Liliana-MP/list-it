import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ImageBackground, Text, TouchableOpacity } from "react-native";
import { ScreenRoute } from "../../navigation/constants";
import { RootStackParamList } from "../../navigation/types";
import * as S from "./styled";
import Button from "../../components/Button/Button";

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
      <S.Container>
        <Text>This is HomeScreen</Text>

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
