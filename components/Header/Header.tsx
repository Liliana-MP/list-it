import React from "react";
import Typography from "../Typography";
import * as S from "./styled";

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <S.Container>
      <Typography size={36} weight="semi-bold" title={title} />
    </S.Container>
  );
};

export default Header;
