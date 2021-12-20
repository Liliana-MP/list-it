import React, { useEffect, useState } from "react";
import theme from "../../theme";
import Typography from "../Typography";
import * as S from "./styled";

const UpdateBox = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date().getDate().toString();
    const month = new Date().getMonth().toString();
    const year = new Date().getFullYear().toString();

    setCurrentDate(date + "/" + month + "-" + year);
  }, []);

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
            title={currentDate}
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
