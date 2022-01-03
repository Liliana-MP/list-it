import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import { CogIcon } from "react-native-heroicons/outline";
import Header from "../../components/Header";
import ListButton from "../../components/ListButton";
import { List } from "../../models/types";

import { ScreenRoute } from "../../navigation/constants";
import { RootStackParamList } from "../../navigation/types";
import theme from "../../theme";
import * as S from "./styled";

type AllListsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoute.MAIN_SCREEN
>;

const lists = [
  { id: "1", name: "Hejsan Hejsan" },
  { id: "2", name: "Home" },
  { id: "3", name: "Vacation" },
  { id: "4", name: "Groceries" },
  { id: "5", name: "Obi" },
  { id: "6", name: "Computer parts" },
  { id: "7", name: "My christmas list" },
  { id: "8", name: "Random" },
  { id: "9", name: "Birthday" },
  { id: "10", name: "New Years" },
  { id: "11", name: "All Birthdays" },
  { id: "12", name: "Work" },
];

const AllListsScreen = ({ navigation }: AllListsScreenProps) => {
  const renderItem = ({ item }: { item: List }) => {
    return (
      <ListButton
        type="list"
        title={item.name}
        color={theme.primary.color}
        onPress={() => navigation.navigate(ScreenRoute.LIST_SCREEN)}
      />
    );
  };
  return (
    <S.Container>
      <ImageBackground
        source={require("../../assets/images/marble-white.jpg")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <Header color={theme.secondary.color} title="Your Lists" />
        <S.ListContainer>
          <FlatList
            data={lists}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
          />
        </S.ListContainer>
      </ImageBackground>
    </S.Container>
  );
};

export default AllListsScreen;
