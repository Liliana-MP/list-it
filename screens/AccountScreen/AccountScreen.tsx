import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ImageBackground, View } from "react-native";
import Button from "../../components/Button";
import DeleteAccModal from "../../components/DeleteAccModal";
import Header from "../../components/Header";
import InputField from "../../components/InputField";
import PasswordInputField from "../../components/PasswordInputField";
import TextButton from "../../components/TextButton";
import { auth } from "../../firebase";
import {
  deleteUser,
  reauthenticateWithCredential,
  signOut,
} from "firebase/auth";
import { ScreenRoute } from "../../navigation/constants";
import { RootStackParamList } from "../../navigation/types";
import theme from "../../theme";
import * as S from "./styled";
import Toast from "react-native-toast-message";
import PromptCredentialsModal from "../../components/PromptCredentialsModal";

type AccountScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoute.MAIN_SCREEN
>;

const AccountScreen = ({ navigation }: AccountScreenProps) => {
  const [showPassword, setShowPassword] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [credentialsModalVisible, setCredentialsModalVisible] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const user = auth.currentUser;

  const signOutUser = () => {
    signOut(auth);
    navigation.navigate(ScreenRoute.LOGIN_SCREEN);
  };

  const deleteAccount = () => {
    if (user != null) {
      deleteUser(user)
        .then(() => {
          navigation.navigate(ScreenRoute.LOGIN_SCREEN);
          Toast.show({
            type: "success",
            text1: "Success",
            text2: "Your account has been deleted",
          });
        })
        .catch((error) => {
          if (error.code === "auth/requires-recent-login") {
            navigation.navigate(ScreenRoute.LOGIN_SCREEN);
          }
          Toast.show({
            type: "error",
            text1: "Error",
            text2: error.message,
          });
        });
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/marble-white.jpg")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      {/* <PromptCredentialsModal
        color={theme.secondary.color}
        modalVisible={credentialsModalVisible}
        setModalVisible={setCredentialsModalVisible}
        title="Re-authenticate"
        onPress={() => setCredentialsModalVisible(!credentialsModalVisible)}
        onChangeEmail={(text: string) => setEmailInput(text)}
        onChangePassword={(text: string) => setPasswordInput(text)}
        emailValue={emailInput}
        passwordValue={passwordInput}
      /> */}

      <DeleteAccModal
        color={theme.secondary.color}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        title="Delete account?"
        onPress={deleteAccount}
      />

      <S.Container>
        <Header title="Account Screen" color={theme.secondary.color} />
        <S.InputFieldContainer>
          <InputField placeHolder="First name" />
          <InputField placeHolder="Second name" />
          <InputField placeHolder="Email" />
          <PasswordInputField
            placeHolder="Password"
            showPassword={showPassword}
            onPress={() => setShowPassword(!showPassword)}
          />
        </S.InputFieldContainer>
      </S.Container>
      <S.TextButtonContainer>
        <TextButton
          color="red"
          buttonText="Delete account"
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        />
      </S.TextButtonContainer>

      <S.ButtonContainer>
        <S.SaveButtonContainer>
          <Button
            type="s-regular"
            title="Save"
            color={theme.primary.color}
            textColor={theme.secondary.onColor}
            onPress={() => {
              console.log("clickkk");
            }}
          />
        </S.SaveButtonContainer>
        <Button
          type="signOut"
          title="Sign out"
          color={theme.secondary.color}
          textColor={theme.secondary.onColor}
          onPress={signOutUser}
        />
      </S.ButtonContainer>
    </ImageBackground>
  );
};

export default AccountScreen;
