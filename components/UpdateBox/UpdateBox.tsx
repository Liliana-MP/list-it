import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import theme from "../../theme";
import Typography from "../Typography";
import * as S from "./styled";

interface UpdateBoxProps {
  userName: string;
}

const UpdateBox = ({ userName }: UpdateBoxProps) => {
  const date = format(new Date(), "dd/MM-yyyy");

  return (
    <S.Box>
      <S.BoxContainer>
        <S.NameContainer>
          <Typography
            size={30}
            weight="light"
            title={"Hi " + userName}
            color="white"
          />
        </S.NameContainer>

        <Typography
          title={"Today"}
          size={15}
          weight="light"
          color={theme.secondary.onColor}
        />
        <S.DateContainer>
          <Typography
            title={date}
            size={20}
            weight="semi-bold"
            color={theme.secondary.onColor}
          />
        </S.DateContainer>
      </S.BoxContainer>
    </S.Box>
  );
};

export default UpdateBox;
