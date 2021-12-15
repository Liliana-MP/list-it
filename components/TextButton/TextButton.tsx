import React from "react";
import { TouchableOpacity, Text } from "react-native";
import * as S from "./styled";

interface TextButtonProps {
  buttonText: string;
  color?: string;
}

const Textbutton = ({ buttonText }: TextButtonProps) => {
  return (
    <TouchableOpacity>
      <Text>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default Textbutton;
