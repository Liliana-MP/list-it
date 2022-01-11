import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { ImageBackground, Text, TouchableOpacity } from "react-native";

import Typography from "../../components/Typography";
import { TabRoute } from "../../navigation/constants";
import { RootTabParamList } from "../../navigation/types";
import theme from "../../theme";
import * as S from "./styled";

type NotificationScreenProps = NativeStackScreenProps<
  RootTabParamList,
  TabRoute.NOTIFICATION_SCREEN
>;

const NotificationScreen = ({ navigation }: NotificationScreenProps) => {
  return (
    <S.Container>
      <ImageBackground
        source={require("../../assets/images/marble-white.jpg")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <S.TextContainer>
          <Typography
            color={theme.secondary.color}
            size={50}
            title="Coming Soon"
          />
        </S.TextContainer>
      </ImageBackground>
    </S.Container>
  );
};

export default NotificationScreen;
