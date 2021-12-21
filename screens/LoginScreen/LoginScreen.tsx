import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import Button from "../../components/Button";
import { ScreenRoute } from "../../navigation/constants";
import { RootStackParamList } from "../../navigation/types";
import * as S from "./styled";
import InputField from "../../components/InputField";
import theme from "../../theme";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Textbutton from "../../components/TextButton/TextButton";
import PasswordInputField from "../../components/PasswordInputField";

type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoute.LOGIN_SCREEN
>;

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <S.Container>
      <S.VideoBackground
        source={require("../../assets/videos/background-video.mp4")}
        rate={1}
        shouldPlay={true}
        isLooping={true}
        resizeMode="cover"
      />

      <S.Title> List It </S.Title>
      <S.InputFieldContainer>
        <InputField placeHolder="Email" />
        <PasswordInputField
          onPress={() => setShowPassword(!showPassword)}
          showPassword={showPassword}
          placeHolder="Password"
        />
      </S.InputFieldContainer>
      <S.ButtonContainer>
        <BouncyCheckbox
          onPress={(isChecked: boolean) => {}}
          text="Keep me logged in"
          textStyle={{ textDecorationLine: "none" }}
          fillColor={theme.primary.color}
          style={{ marginBottom: 15 }}
        />
        <Button
          type="regular"
          title="Sign in"
          color={theme.primary.color}
          textColor={theme.primary.onColor}
          onPress={() => navigation.navigate(ScreenRoute.MAIN_SCREEN)}
        />
        <Button
          type="regular"
          title="Sign up"
          color={theme.secondary.color}
          textColor={theme.secondary.onColor}
          onPress={() => navigation.navigate(ScreenRoute.SIGNUP_SCREEN)}
        />
        <Textbutton buttonText="Forgot Password" />
      </S.ButtonContainer>
    </S.Container>
  );
};

export default LoginScreen;
