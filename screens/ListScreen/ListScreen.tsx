import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useEffect, useState } from "react";
import { ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { CogIcon } from "react-native-heroicons/outline";
import Toast from "react-native-toast-message";
import AddListModal from "../../components/AddListModal";
import CustomTabBarButton from "../../components/CustomTabBarButton";
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
  {
    id: "4",
    name: "Milk Milk Milk Milk Milk Milk Milk Milk Milk Milk Milk Milk ",
    done: false,
  },
];

const ListScreen = ({ navigation }: ListScreenProps) => {
  const [onGoingItems, setOnGoingItems] = useState<Item[]>([]);
  const [doneItems, setDoneItems] = useState<Item[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    setOnGoingItems(listItems);
  }, []);

  // Verkar fungera korrekt men dubbelkolla sen när firebase är uppe
  const onDismiss = useCallback((id: string) => {
    const onGoingIndex = onGoingItems.findIndex((item) => item.id === id);
    if (onGoingIndex !== -1) {
      onGoingItems.splice(onGoingIndex, 1);
    } else {
      const doneIndex = doneItems.findIndex((item) => item.id === id);
      doneItems.splice(doneIndex, 1);
    }
  }, []);

  const setDone = (id: string) => {
    const tempList = [...onGoingItems];
    const index = tempList.findIndex((item) => item.id === id);
    const doneItem = tempList.splice(index, 1);
    doneItem[0].done = true;

    setDoneItems([...doneItems, ...doneItem]);
    setOnGoingItems(tempList);
  };

  const setOnGoing = (id: string) => {
    const tempList = [...doneItems];
    const index = tempList.findIndex((item) => item.id === id);
    const onGoingItem = tempList.splice(index, 1);
    onGoingItems[0].done = false;

    setOnGoingItems([...onGoingItems, ...onGoingItem]);
    setDoneItems(tempList);
  };

  const addItem = () => {
    if (textInput == "") {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please input text",
        position: "top",
        topOffset: 80,
      });
    } else {
      const newItem = {
        id: Math.random().toString(),
        name: textInput,
      };

      setOnGoingItems([...onGoingItems, newItem]);
      setTextInput("");
      setModalVisible(!modalVisible);
    }
  };

  return (
    <S.Container>
      <AddListModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        color={theme.secondary.color}
        title="Add new item"
        onPress={addItem}
        value={textInput}
        onChangeText={(text: string) => setTextInput(text)}
      />
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
              <CogIcon height={38} width={38} color={theme.secondary.color} />
            </S.TopBar>
          </TouchableOpacity>

          <S.TopContainer>
            <Header title="List 1 " color={theme.secondary.color} />
            <S.ButtonContainer>
              <CustomTabBarButton
                color={theme.primary.color}
                onPress={() => setModalVisible(!modalVisible)}
              />
            </S.ButtonContainer>
          </S.TopContainer>

          <S.OnGoingContainer>
            <Typography
              title="Ongoing"
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
                  id={item.id}
                  onDismiss={onDismiss}
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
