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
import { Item, List } from "../../models/types";

type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoute.MAIN_SCREEN
>;

const listButtons = [
  { id: "1", name: "To list screen" },
  { id: "2", name: "Home" },
  { id: "3", name: "Vacation" },
  { id: "4", name: "Groceries" },
  { id: "5", name: "Obi" },
  { id: "6", name: "Computer parts" },
  { id: "7", name: "My christmas list" },
  { id: "8", name: "Random" },
];

const user = { id: "1", firstName: "Liliana", lastName: "Montini Pitra" };

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const renderItem = ({ item }: { item: List }) => {
    return (
      <Button
        type="square"
        title={item.name}
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
        <S.Title> List It </S.Title>
      </S.TitleContainer>
      <UpdateBox userName={user.firstName} />

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
