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
import ListButton from "../../components/ListButton";

type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoute.MAIN_SCREEN
>;

const listItems = [
  { id: "1", name: "Milk", done: false },
  { id: "2", name: "Honey", done: false },
  { id: "3", name: "Pears", done: true },
  {
    id: "4",
    name: "Milk Milk Milk Milk Milk Milk Milk Milk Milk Milk Milk Milk ",
    done: false,
  },
];

const listButtons = [
  { id: "1", name: "Home", items: listItems },
  { id: "2", name: "Random", items: listItems },
  { id: "3", name: "Vacation", items: listItems },
  { id: "4", name: "Groceries", items: listItems },
  { id: "5", name: "Obi", items: listItems },
  { id: "6", name: "Computer parts" },
  { id: "7", name: "My christmas list" },
  { id: "8", name: "Random" },
];

const user = { id: "1", firstName: "Liliana", lastName: "Montini Pitra" };

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const renderItem = ({ item }: { item: List }) => {
    let doneSum = "";
    let ongoingSum = "";

    if (item.items) {
      doneSum = item.items
        .filter((item) => item.done === true)
        .length.toString();
      ongoingSum = item.items
        .filter((item) => item.done === false)
        .length.toString();
    }

    return (
      <Button
        type="square"
        title={item.name}
        textColor={theme.secondary.color}
        color={theme.color_codes.white}
        onPress={() => navigation.navigate(ScreenRoute.LIST_SCREEN)}
        doneSum={doneSum}
        ongoingSum={ongoingSum}
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
