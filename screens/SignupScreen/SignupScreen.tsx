import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import Button from "../../components/Button";
import { ScreenRoute } from "../../navigation/constants";
import { RootStackParamList } from "../../navigation/types";
import InputField from "../../components/InputField";
import theme from "../../theme";
import * as S from "./styled";
import PasswordInputField from "../../components/PasswordInputField";

type SignupScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoute.SIGNUP_SCREEN
>;

const SignupScreen = ({ navigation }: SignupScreenProps) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showRetypePassword, setShowRetypePassword] = useState(true);

  return (
    <S.Container>
      <S.VideoBackground
        source={require("../../assets/videos/background-video.mp4")}
        rate={1}
        shouldPlay={true}
        isLooping={true}
        resizeMode="cover"
      />
      <S.Title> Sign Up </S.Title>

      <S.InputFieldContainer>
        <InputField placeHolder="First name" />
        <InputField placeHolder="Last name" />
        <InputField placeHolder="Email" />
        <PasswordInputField
          onPress={() => setShowPassword(!showPassword)}
          showPassword={showPassword}
          placeHolder="Password"
        />

        <PasswordInputField
          onPress={() => setShowRetypePassword(!showRetypePassword)}
          showPassword={showRetypePassword}
          placeHolder="Retype Password"
        />
      </S.InputFieldContainer>

      <Button
        type="Regular"
        title="Sign up"
        color={theme.secondary.color}
        textColor={theme.secondary.onColor}
        onPress={() => navigation.navigate(ScreenRoute.HOME_SCREEN)}
      />
    </S.Container>
  );
};

export default SignupScreen;
