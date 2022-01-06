import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
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
  { id: "1", name: "Milk" },
  { id: "2", name: "Honey" },
  { id: "3", name: "Pears" },
];

const ListScreen = ({ navigation }: ListScreenProps) => {
  const [onGoingItems, setOnGoingItems] = useState<Item[]>([]);
  const [doneItems, setDoneItems] = useState<Item[]>([]);

  useEffect(() => {
    setOnGoingItems(listItems);
  }, []);

  const setDone = (id: string) => {
    const tempList = [...onGoingItems];
    const index = tempList.findIndex((item) => item.id === id);
    const doneItem = tempList.splice(index, 1);

    setDoneItems([...doneItems, ...doneItem]);
    setOnGoingItems(tempList);
  };

  const setOnGoing = (id: string) => {
    const tempList = [...doneItems];
    const index = tempList.findIndex((item) => item.id === id);
    const onGoingItem = tempList.splice(index, 1);

    setOnGoingItems([...onGoingItems, ...onGoingItem]);
    setDoneItems(tempList);
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
            {onGoingItems.length > 0 &&
              onGoingItems.map((item) => (
                <ListButton
                  key={item.id}
                  type="item"
                  title={item.name}
                  color="white"
                  onPress={() => setDone(item.id)}
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
            {doneItems.length > 0 &&
              doneItems.map((item) => (
                <ListButton
                  key={item.id}
                  type="item"
                  title={item.name}
                  color="white"
                  isChecked={true}
                  onPress={() => setOnGoing(item.id)}
                />
              ))}
          </S.DoneContainer>
        </ScrollView>
      </ImageBackground>
    </S.Container>
  );
};

export default ListScreen;
