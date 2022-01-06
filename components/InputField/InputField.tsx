import React, { useState } from "react";

import * as S from "./styled";

interface InputProps {
  placeHolder?: string;
  color?: string;
  secureTextEntry?: boolean;
  type?: string;
  onChangeText?: (text: string) => void;
  value?: string;
}

const InputField = ({
  type,
  placeHolder,
  secureTextEntry,
  onChangeText,
  value,
}: InputProps) => {
  if (type === "password") {
    return (
      <S.PasswordField
        placeholder={placeHolder}
        secureTextEntry={secureTextEntry}
      />
    );
  } else if (type === "modal") {
    return (
      <S.ModalField
        placeholder={placeHolder}
        onChangeText={onChangeText}
        value={value}
      />
    );
  } else {
    return <S.InputField placeholder={placeHolder} />;
  }
};

export default InputField;
