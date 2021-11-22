import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import Button from "../../components/Button";
import { ScreenRoute } from "../../navigation/constants";
import { RootStackParamList } from "../../navigation/types";
import * as S from "./styled";
import InputField from "../../components/InputField";
import theme from "../../theme";
import { Text } from "react-native";

type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoute.LOGIN_SCREEN
>;

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  return (
    <S.Container>
      <S.VideoBackground
        source={require("../../assets/videos/background-video.mp4")}
        rate={1}
        shouldPlay={true}
        isLooping={true}
        resizeMode="cover"
      />

      <S.Title>List It</S.Title>
      <S.InputFieldContainer>
        <InputField placeHolder="Email" />
        <InputField placeHolder="Password" />
      </S.InputFieldContainer>

      <Button
        type="Regular"
        title="Sign in"
        color={theme.primary.color}
        textColor={theme.primary.onColor}
        onPress={() => navigation.navigate(ScreenRoute.HOME_SCREEN)}
      />
      <Button
        type="Regular"
        title="Sign up"
        color={theme.secondary.color}
        textColor={theme.secondary.onColor}
        onPress={() => navigation.navigate(ScreenRoute.SIGNUP_SCREEN)}
      />
    </S.Container>
  );
};

export default LoginScreen;