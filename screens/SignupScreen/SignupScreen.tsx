import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import Button from "../../components/Button";
import { ScreenRoute } from "../../navigation/constants";
import { RootStackParamList } from "../../navigation/types";
import InputField from "../../components/InputField";
import theme from "../../theme";
import * as S from "./styled";

type SignupScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoute.SIGNUP_SCREEN
>;

const SignupScreen = ({ navigation }: SignupScreenProps) => {
  return (
    <S.Container>
      <S.VideoBackground
        source={require("../../assets/videos/background-video.mp4")}
        rate={1}
        shouldPlay={true}
        isLooping={true}
        resizeMode="cover"
      />
      <InputField placeHolder="First name" />
      <InputField placeHolder="Last name" />
      <InputField placeHolder="Email" />
      <InputField placeHolder="Password" />

      <Button
        type="Regular"
        title="Register"
        color={theme.secondary.color}
        textColor={theme.secondary.onColor}
        onPress={() => navigation.navigate(ScreenRoute.HOME_SCREEN)}
      />
    </S.Container>
  );
};

export default SignupScreen;
