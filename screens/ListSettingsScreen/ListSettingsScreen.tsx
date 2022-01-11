import React from "react";
import { ImageBackground } from "react-native";
import Header from "../../components/Header";

import Typography from "../../components/Typography";
import theme from "../../theme";
import * as S from "./styled";

const ListSettingsScreen = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/marble-white.jpg")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <Header title="List Settings" color={theme.secondary.color} />
      <S.Container>
        <Typography
          title="Coming Soon"
          color={theme.secondary.color}
          size={30}
          weight="light"
        />
      </S.Container>
    </ImageBackground>
  );
};

export default ListSettingsScreen;
