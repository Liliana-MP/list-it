import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ImageBackground } from "react-native";
import Button from "../../components/Button";
import DeleteAccModal from "../../components/DeleteAccModal";
import Header from "../../components/Header";

import InputField from "../../components/InputField";
import PasswordInputField from "../../components/PasswordInputField";
import TextButton from "../../components/TextButton";

import { TabRoute } from "../../navigation/constants";
import { RootTabParamList } from "../../navigation/types";
import theme from "../../theme";
import * as S from "./styled";

type AccountScreenProps = NativeStackScreenProps<
  RootTabParamList,
  TabRoute.ACCOUNT_SCREEN
>;

const onDelete = () => {
  console.log("Deleted");
};

const AccountScreen = ({ navigation }: AccountScreenProps) => {
  const [showPassword, setShowPassword] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

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
        onPress={onDelete}
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
          onPress={() => {
            console.log("clickkk");
          }}
        />
      </S.ButtonContainer>
    </ImageBackground>
  );
};

export default AccountScreen;
