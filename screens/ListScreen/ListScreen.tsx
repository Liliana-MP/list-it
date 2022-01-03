import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  FlatList,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CogIcon } from "react-native-heroicons/outline";
import Header from "../../components/Header";

import ListButton from "../../components/ListButton";
import Typography from "../../components/Typography";
import { Item } from "../../models/types";
import { ScreenRoute } from "../../navigation/constants";
import { RootStackParamList } from "../../navigation/types";
import theme from "../../theme";
import * as S from "./styled";

type ListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoute.LIST_SCREEN
>;

const listItems = [
  { id: "1", name: "Milk", done: false },
  { id: "2", name: "Honey", done: false },
  { id: "3", name: "Pears", done: false },
];

const ListScreen = ({ navigation }: ListScreenProps) => {
  const [doneItems, setDoneItems] = useState<Item[]>([]);

  const completeTask = (id: string) => {
    let itemsCopy = [...listItems];
    const newItems = itemsCopy.map((item: Item) => {
      if (item.id === id) {
        return { ...item, done: true };
      }
      return item;
    });

    const filteredArray = newItems.filter((item) => item.done === true);
    setDoneItems([...doneItems, ...filteredArray]);
  };

  return (
    <S.Container>
      <ImageBackground
        source={require("../../assets/images/marble-white.jpg")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <ScrollView>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(ScreenRoute.LIST_SETTINGS_SCREEN)
            }
          >
            <S.TopBar>
              <CogIcon height={38} width={38} color="black" />
            </S.TopBar>
          </TouchableOpacity>
          <Header title="List 1" />

          <S.OnGoingContainer>
            <Typography
              title="OnGoing"
              size={14}
              color={theme.primary.color}
              weight="semi-bold"
            />
            {listItems.map((item) => (
              <ListButton
                key={item.id}
                type="item"
                title={item.name}
                color="white"
                onPress={() => completeTask(item.id)}
              />
            ))}
          </S.OnGoingContainer>
          <S.DoneContainer>
            <Typography
              title="Done"
              size={14}
              color={theme.primary.color}
              weight="semi-bold"
            />
            {doneItems.length > 0
              ? doneItems.map((item) => (
                  <ListButton
                    key={item.id}
                    type="item"
                    title={item.name}
                    color="white"
                    onPress={() => completeTask(item.id)}
                  />
                ))
              : null}
          </S.DoneContainer>
        </ScrollView>
      </ImageBackground>
    </S.Container>
  );
};

export default ListScreen;
