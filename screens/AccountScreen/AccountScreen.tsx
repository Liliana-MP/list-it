import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ImageBackground } from "react-native";
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

const AccountScreen = ({ navigation }: AccountScreenProps) => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <ImageBackground
      source={require("../../assets/images/marble-white.jpg")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
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
      <TextButton
        color="red"
        buttonText="Delete account"
        onPress={() => {
          console.log("click");
        }}
      />
    </ImageBackground>
  );
};

export default AccountScreen;
