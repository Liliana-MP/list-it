import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import theme from "../../theme";
import Typography from "../Typography";
import * as S from "./styled";

const UpdateBox = () => {
  const date = format(new Date(), "dd/MM-yyyy");

  return (
    <S.Box>
      <S.BoxContainer>
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
        <Typography
          title={"You added toiletpaper to Home"}
          size={15}
          weight="light"
          color={theme.secondary.onColor}
        />
        <Typography
          title={"Valle added apples to Home"}
          size={15}
          weight="light"
          color={theme.secondary.onColor}
        />
      </S.BoxContainer>
    </S.Box>
  );
};

export default UpdateBox;
