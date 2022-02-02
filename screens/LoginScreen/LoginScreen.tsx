import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import { ScreenRoute } from "../../navigation/constants";
import { RootStackParamList } from "../../navigation/types";
import * as S from "./styled";
import InputField from "../../components/InputField";
import theme from "../../theme";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Textbutton from "../../components/TextButton/TextButton";
import PasswordInputField from "../../components/PasswordInputField";
import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import Toast from "react-native-toast-message";

type LoginScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoute.LOGIN_SCREEN
>;

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate(ScreenRoute.MAIN_SCREEN);
      }
    });

    return unsubscribe;
  }, []);

  const logIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        navigation.navigate(ScreenRoute.MAIN_SCREEN);
      })
      .catch((error) => {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: error.message,
        });
      });
  };

  const forgotPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Toast.show({
          type: "success",
          text1: "Success",
          text2: "Email sent",
        });
      })
      .catch((error) => {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: error.message,
        });
      });
  };
  return (
    <S.Container>
      <S.VideoBackground
        source={require("../../assets/videos/background-video-3.mp4")}
        rate={1}
        shouldPlay={true}
        isLooping={true}
        resizeMode="cover"
      />

      <S.Title> List It </S.Title>
      <S.InputFieldContainer>
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
          onPress={logIn}
        />
        <Button
          type="regular"
          title="Sign up"
          color={theme.secondary.color}
          textColor={theme.secondary.onColor}
          onPress={() => navigation.navigate(ScreenRoute.SIGNUP_SCREEN)}
        />
        <Textbutton buttonText="Forgot Password" onPress={forgotPassword} />
      </S.ButtonContainer>
    </S.Container>
  );
};

export default LoginScreen;
