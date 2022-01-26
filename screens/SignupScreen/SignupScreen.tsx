import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import Button from "../../components/Button";
import { ScreenRoute } from "../../navigation/constants";
import { RootStackParamList } from "../../navigation/types";
import InputField from "../../components/InputField";
import theme from "../../theme";
import * as S from "./styled";
import PasswordInputField from "../../components/PasswordInputField";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-toast-message";

type SignupScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoute.SIGNUP_SCREEN
>;

const SignupScreen = ({ navigation }: SignupScreenProps) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUp = () => {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigation.navigate(ScreenRoute.MAIN_SCREEN);
        })
        .catch((error) => {
          Toast.show({
            type: "error",
            text1: "Error",
            text2: error.message,
          });
        });
    } else {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Passwords do not match",
      });
    }
  };

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
        <InputField
          placeHolder="First name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <InputField
          placeHolder="Last name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
        <InputField
          placeHolder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <PasswordInputField
          onPress={() => setShowPassword(!showPassword)}
          showPassword={showPassword}
          placeHolder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <PasswordInputField
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          showPassword={showConfirmPassword}
          placeHolder="Retype Password"
        />
      </S.InputFieldContainer>

      <Button
        type="regular"
        title="Sign up"
        color={theme.secondary.color}
        textColor={theme.secondary.onColor}
        onPress={signUp}
      />
    </S.Container>
  );
};

export default SignupScreen;
