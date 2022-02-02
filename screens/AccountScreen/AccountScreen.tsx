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
  updateEmail,
} from "firebase/auth";
import { ScreenRoute } from "../../navigation/constants";
import { RootStackParamList } from "../../navigation/types";
import theme from "../../theme";
import * as S from "./styled";
import Toast from "react-native-toast-message";

type AccountScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoute.MAIN_SCREEN
>;

const AccountScreen = ({ navigation }: AccountScreenProps) => {
  const [modalVisible, setModalVisible] = useState(false);
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

  // const updateAccountInfo = () => {
  //   if(emailInput != ""){
  //     updateEmail(auth.currentUser, emailInput)
  //     .then(() => {

  //     })
  //   }
  // };

  return (
    <ImageBackground
      source={require("../../assets/images/marble-white.jpg")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
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
