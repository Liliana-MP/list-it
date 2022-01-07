import React from "react";
import Typography from "../Typography";
import * as S from "./styled";

interface HeaderProps {
  title: string;
  color?: string;
}

const Header = ({ title, color }: HeaderProps) => {
  return (
    <S.Container>
      <Typography
        color={color}
        size={36}
        weight="semi-bold"
        title={title}
        numberOfLines={1}
      />
    </S.Container>
  );
};

export default Header;
