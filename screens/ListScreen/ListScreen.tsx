import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  collection,
  deleteField,
  doc,
  DocumentData,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import { CogIcon } from "react-native-heroicons/outline";
import Toast from "react-native-toast-message";
import AddListModal from "../../components/AddListModal";
import CustomTabBarButton from "../../components/CustomTabBarButton";
import Header from "../../components/Header";
import ListButton from "../../components/ListButton";
import Typography from "../../components/Typography";
import { db } from "../../firebase";
import { Item } from "../../models/types";
import { ScreenRoute } from "../../navigation/constants";
import { RootStackParamList } from "../../navigation/types";
import theme from "../../theme";
import * as S from "./styled";
import uuid from "react-native-uuid";

type ListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoute.LIST_SCREEN
>;

const ListScreen = ({ navigation, route }: ListScreenProps) => {
  const [onGoingItems, setOnGoingItems] = useState<Item[]>([]);
  const [doneItems, setDoneItems] = useState<Item[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [listTitle, setListTitle] = useState("");

  const { params: list } = route;

  const listRef = doc(db, "lists", list.id);

  useEffect(() => {
    onSnapshot(doc(db, "lists", list.id), (doc) => {
      let items;
      const data = doc.data();
      if (data) {
        items = data.items;
        setListTitle(data.name);
      }
      const convertedItems = [] as Item[];
      for (let item in items) {
        const newItem = {
          id: items[item].id,
          name: items[item].name,
          done: items[item].done,
        };
        convertedItems.push(newItem);
      }
      setOnGoingItems(convertedItems.filter((item) => item.done === false));
      setDoneItems(convertedItems.filter((item) => item.done === true));
    });
  }, []);

  const onDismiss = async (id: string) => {
    const onGoingIndex = onGoingItems.findIndex((item) => item.id === id);
    let getName = onGoingItems.find((item) => item.id === id)?.name || "";

    if (onGoingIndex !== -1) {
      onGoingItems.splice(onGoingIndex, 1);
    } else {
      const doneIndex = doneItems.findIndex((item) => item.id === id);
      getName = doneItems.find((item) => item.id === id)?.name || "";
      doneItems.splice(doneIndex, 1);
    }

    await updateDoc(listRef, {
      [`items.${getName}`]: deleteField(),
    });
  };

  const setDone = async (id: string) => {
    const tempList = [...onGoingItems];
    const index = tempList.findIndex((item) => item.id === id);
    let getName = onGoingItems.find((item) => item.id === id)?.name || "";
    const doneItem = tempList.splice(index, 1);
    doneItem[0].done = true;

    await updateDoc(listRef, {
      [`items.${getName}.done`]: true,
    });

    setDoneItems([...doneItems, ...doneItem]);
    setOnGoingItems(tempList);
  };

  const setOnGoing = async (id: string) => {
    const tempList = [...doneItems];
    const index = tempList.findIndex((item) => item.id === id);
    let getName = doneItems.find((item) => item.id === id)?.name || "";
    const onGoingItem = tempList.splice(index, 1);
    onGoingItem[0].done = false;

    await updateDoc(listRef, {
      [`items.${getName}.done`]: false,
    });

    setOnGoingItems([...onGoingItems, ...onGoingItem]);
    setDoneItems(tempList);
  };

  const addItem = async () => {
    if (textInput == "") {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please input text",
        position: "top",
        topOffset: 80,
      });
    } else {
      await setDoc(
        listRef,
        {
          items: {
            [textInput]: {
              id: uuid.v4(),
              name: textInput,
              done: false,
            },
          },
        },
        { merge: true }
      );

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
            <Header title={listTitle} color={theme.secondary.color} />
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
                  id={item.id}
                  type="item"
                  title={item.name}
                  color="white"
                  onPress={() => setOnGoing(item.id)}
                  isChecked={true}
                />
              ))}
          </S.DoneContainer>
        </ScrollView>
      </ImageBackground>
    </S.Container>
  );
};

export default ListScreen;
