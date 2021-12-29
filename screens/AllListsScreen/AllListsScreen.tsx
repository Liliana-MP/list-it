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

import { ScreenRoute } from "../../navigation/constants";
import { RootStackParamList } from "../../navigation/types";
import theme from "../../theme";
import * as S from "./styled";

type AllListsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoute.MAIN_SCREEN
>;

const lists = [
  { id: "1", title: "To list screen" },
  { id: "2", title: "Home" },
  { id: "3", title: "Vacation" },
  { id: "4", title: "Groceries" },
  { id: "5", title: "Obi" },
  { id: "6", title: "Computer parts" },
  { id: "7", title: "My christmas list" },
  { id: "8", title: "Random" },
  { id: "9", title: "Birthday" },
  { id: "10", title: "New Years" },
  { id: "11", title: "All Birthdays" },
  { id: "12", title: "Work" },
];

const AllListsScreen = ({ navigation }: AllListsScreenProps) => {
  const renderItem = ({ item }: any) => {
    return (
      <ListButton
        title={item.title}
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
        <S.ListContainer
          data={lists}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ImageBackground>
    </S.Container>
  );
};

export default AllListsScreen;
