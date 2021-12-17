import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { EyeIcon, EyeOffIcon } from "react-native-heroicons/outline";
import theme from "../../theme";
import InputField from "../InputField";
import * as S from "./styled";

interface PasswordInputProps {
  onPress: () => void;
  showPassword: boolean;
  placeHolder: string;
}

const PasswordInputField = ({
  onPress,
  showPassword,
  placeHolder,
}: PasswordInputProps) => {
  return (
    <S.Container>
      <InputField
        type="Password"
        placeHolder={placeHolder}
        secureTextEntry={showPassword}
      />
      <TouchableOpacity onPress={onPress}>
        {showPassword ? (
          <EyeIcon
            height={25}
            width={25}
            style={{ padding: 15, marginRight: 5 }}
            color={theme.secondary.color}
          />
        ) : (
          <EyeOffIcon
            height={25}
            width={25}
            style={{ padding: 15, marginRight: 5 }}
            color={theme.secondary.color}
          />
        )}
      </TouchableOpacity>
    </S.Container>
  );
};

export default PasswordInputField;
