import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Button from "../Button";
import Typography from "../Typography";
import * as S from "./styled";

interface TextButtonProps {
  buttonText: string;
  color?: string;
  onPress: () => void;
}

const Textbutton = ({ buttonText, color, onPress }: TextButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Typography
        color={color}
        title={buttonText}
        size={13}
        weight="semi-bold"
      />
    </TouchableOpacity>
  );
};

export default Textbutton;
