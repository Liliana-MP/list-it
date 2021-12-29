import React from "react";
import { ChevronRightIcon } from "react-native-heroicons/outline";
import Typography from "../Typography";
import * as S from "./styled";

interface ListButtonProps {
  title: string;
}

const ListButton = ({ title }: ListButtonProps) => {
  return (
    <S.Button>
      <Typography title={title} size={20} weight="light" />
      <S.Container>
        <ChevronRightIcon color="black" />
      </S.Container>
    </S.Button>
  );
};

export default ListButton;
