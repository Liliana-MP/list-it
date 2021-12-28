import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ImageBackground, FlatList, Modal } from "react-native";
import { ScreenRoute } from "../../navigation/constants";
import { RootStackParamList } from "../../navigation/types";
import * as S from "./styled";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import UpdateBox from "../../components/UpdateBox";
import theme from "../../theme";
import Tabs from "../../navigation/TabNavigator";
import { InputField } from "../../components/InputField/styled";

type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoute.MAIN_SCREEN
>;

const listButtons = [
  { id: "1", title: "To list screen" },
  { id: "2", title: "Home" },
  { id: "3", title: "Vacation" },
  { id: "4", title: "Groceries" },
  { id: "5", title: "Obi" },
  { id: "6", title: "Computer parts" },
  { id: "7", title: "My christmas list" },
  { id: "8", title: "Random" },
];

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const renderItem = ({ item }: { item: { id: string; title: string } }) => {
    return (
      <Button
        type="square"
        title={item.title}
        textColor={theme.secondary.color}
        color={theme.color_codes.white}
        onPress={() => navigation.navigate(ScreenRoute.LIST_SCREEN)}
      />
    );
  };

  return (
    <ImageBackground
      source={require("../../assets/images/marble-white.jpg")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <S.TitleContainer>
        <Typography size={30} weight="light" title="Hi Lili" />
      </S.TitleContainer>

      <UpdateBox />

      <S.TextContainer>
        <Typography
          size={15}
          title="Your lists"
          color={theme.color_codes.black}
        />
      </S.TextContainer>

      <S.Container>
        <FlatList
          data={listButtons}
          horizontal
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Button
              type="square"
              title="Create new list"
              textColor={theme.secondary.color}
              color={theme.color_codes.white}
              onPress={() => navigation.navigate(ScreenRoute.LIST_SCREEN)}
            />
          }
          showsHorizontalScrollIndicator={false}
        />
      </S.Container>
    </ImageBackground>
  );
};

export default HomeScreen;
