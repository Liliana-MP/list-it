import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import Button from "../../components/Button";
import { ScreenRoute } from "../../navigation/constants";
import { RootStackParamList } from "../../navigation/types";
import InputField from "../../components/InputField";
import theme from "../../theme";
import * as S from "./styled";
import PasswordInputField from "../../components/PasswordInputField";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-toast-message";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

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

  const addUser = async () => {
    const userRef = doc(db, "users", email);
    await setDoc(userRef, {
      firstname: firstName,
      lastname: lastName,
      email: email,
    });
  };

  const signUp = () => {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          addUser();
          navigation.navigate(ScreenRoute.MAIN_SCREEN);
          setEmail("");
          setFirstName("");
          setLastName("");
          setPassword("");
          setConfirmPassword("");
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
        source={require("../../assets/videos/background-video-3.mp4")}
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
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
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
