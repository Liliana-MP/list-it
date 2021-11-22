import React from "react";
import * as S from "./styled";

interface InputProps {
  placeHolder?: string;
  color?: string;
}

const InputField = ({ placeHolder }: InputProps) => {
  return <S.InputField placeholder={placeHolder} />;
};

export default InputField;
