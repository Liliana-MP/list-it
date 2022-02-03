import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ImageBackground } from "react-native";
import Button from "../../components/Button";
import DeleteAccModal from "../../components/DeleteAccModal";
import Header from "../../components/Header";
import InputField from "../../components/InputField";
import TextButton from "../../components/TextButton";
import { auth, db } from "../../firebase";
import {
  deleteUser,
  sendPasswordResetEmail,
  signOut,
  updateEmail,
} from "firebase/auth";
import { ScreenRoute } from "../../navigation/constants";
import { RootStackParamList } from "../../navigation/types";
import theme from "../../theme";
import * as S from "./styled";
import Toast from "react-native-toast-message";
import { doc, updateDoc } from "firebase/firestore";
import ListButton from "../../components/ListButton";

type AccountScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoute.MAIN_SCREEN
>;

const AccountScreen = ({ navigation }: AccountScreenProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [passwordResetVisible, setPasswordResetVisible] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");

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

  const updateAccountInfo = async () => {
    if (emailInput === "" && firstNameInput === "" && lastNameInput === "") {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "No changes were made",
      });
    } else {
      if (user !== null && user.email !== null) {
        const userRef = doc(db, "users", user.email);
        if (emailInput !== "" && user !== null && user.email !== null) {
          updateEmail(user, emailInput)
            .then(() => {
              setEmailInput("");
              Toast.show({
                type: "Success",
                text1: "Email updated",
              });
            })
            .catch((error) => {
              if (error.code === "auth/requires-recent-login") {
                navigation.navigate(ScreenRoute.LOGIN_SCREEN);
              }
              Toast.show({
                type: "error",
                text1: "Requires recent login",
                text2: "Please login again",
              });
            });

          await updateDoc(userRef, {
            email: emailInput,
          });
        }
        if (firstNameInput !== "") {
          await updateDoc(userRef, {
            firstname: firstNameInput,
          }).then(() => {
            setFirstNameInput("");
            Toast.show({
              type: "success",
              text1: "Success",
              text2: "First name updated",
            });
          });
        }
        if (lastNameInput !== "") {
          await updateDoc(userRef, {
            lastname: lastNameInput,
          }).then(() => {
            setLastNameInput("");
            Toast.show({
              type: "success",
              text1: "Success",
              text2: "Last name updated",
            });
          });
        }
      }
    }
  };

  const resetPassword = () => {
    if (user?.email) {
      sendPasswordResetEmail(auth, user.email)
        .then(() => {
          Toast.show({
            type: "success",
            text1: "Password reset email sent",
            text2: "Check your email inbox or spambox ",
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
    setPasswordResetVisible(!passwordResetVisible);
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
      <DeleteAccModal
        color={theme.secondary_lighter.color}
        modalVisible={passwordResetVisible}
        setModalVisible={setPasswordResetVisible}
        title="Send reset password email?"
        onPress={resetPassword}
      />

      <S.Container>
        <Header title="Account Screen" color={theme.secondary.color} />
        <S.InputFieldContainer>
          <InputField
            placeHolder="First name"
            value={firstNameInput}
            onChangeText={(text) => setFirstNameInput(text)}
          />
          <InputField
            placeHolder="Last name"
            value={lastNameInput}
            onChangeText={(text) => setLastNameInput(text)}
          />
          <InputField
            placeHolder="Email"
            value={emailInput}
            onChangeText={(text) => setEmailInput(text)}
          />
        </S.InputFieldContainer>
      </S.Container>
      <S.PasswordButtonContainer>
        <ListButton
          type="list"
          title="Change Password"
          onPress={() => {
            setPasswordResetVisible(!passwordResetVisible);
          }}
        />
      </S.PasswordButtonContainer>
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
            onPress={updateAccountInfo}
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
