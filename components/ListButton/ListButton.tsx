import React from "react";
import { ChevronRightIcon } from "react-native-heroicons/outline";
import Typography from "../Typography";
import * as S from "./styled";

interface ListButtonProps {
  title: string;
  onPress: () => void;
}

const ListButton = ({ title, onPress }: ListButtonProps) => {
  return (
    <S.Button onPress={onPress}>
      <Typography title={title} size={20} weight="light" />
      <S.ArrowContainer>
        <ChevronRightIcon color="black" />
      </S.ArrowContainer>
    </S.Button>
  );
};

export default ListButton;
