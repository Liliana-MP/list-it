import React, { useState } from "react";

import * as S from "./styled";

interface InputProps {
  placeHolder?: string;
  color?: string;
  secureTextEntry?: boolean;
  type?: string;
}

const InputField = ({ type, placeHolder, secureTextEntry }: InputProps) => {
  if (type === "Password") {
    return (
      <S.PasswordField
        placeholder={placeHolder}
        secureTextEntry={secureTextEntry}
      />
    );
  } else {
    return <S.InputField placeholder={placeHolder} />;
  }
};

export default InputField;
