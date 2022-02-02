import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ImageBackground } from "react-native";
import Button from "../../components/Button";
import DeleteAccModal from "../../components/DeleteAccModal";
import Header from "../../components/Header";
import InputField from "../../components/InputField";
import TextButton from "../../components/TextButton";
import { auth, db } from "../../firebase";
import { deleteUser, signOut, updateEmail } from "firebase/auth";
import { ScreenRoute } from "../../navigation/constants";
import { RootStackParamList } from "../../navigation/types";
import theme from "../../theme";
import * as S from "./styled";
import Toast from "react-native-toast-message";
import { doc } from "firebase/firestore";

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

  const updateAccountInfo = () => {
    if (emailInput != "" && user != null) {
      // const userRef = doc(db, "users", user.email);

      updateEmail(user, emailInput)
        .then(() => {
          Toast.show({
            type: "Success",
            text1: "Email updated",
          });
        })
        .catch((error) => {
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
          <InputField placeHolder="Last name" />
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
