import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, ImageBackground } from "react-native";
import Toast from "react-native-toast-message";
import AddListModal from "../../components/AddListModal";
import CustomTabBarButton from "../../components/CustomTabBarButton";
import Header from "../../components/Header";
import ListButton from "../../components/ListButton";
import { List } from "../../models/types";
import { ScreenRoute } from "../../navigation/constants";
import { RootStackParamList } from "../../navigation/types";
import theme from "../../theme";
import * as S from "./styled";
import { db } from "../../firebase";
import { auth } from "../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  CollectionReference,
  DocumentData,
  query,
  where,
} from "firebase/firestore";

type AllListsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoute.MAIN_SCREEN
>;

const lists = [
  { id: "1", name: "Hejsan Hejsan Hejsan Hejsan Hejsan Hejsan" },
  { id: "2", name: "Home" },
  { id: "3", name: "Vacation" },
  { id: "4", name: "Groceries" },
  { id: "5", name: "Obi" },
  { id: "6", name: "Computer parts" },
  { id: "7", name: "Vacation" },
  { id: "8", name: "Groceries" },
  { id: "9", name: "Obi" },
  { id: "10", name: "Computer parts" },
  { id: "11", name: "Vacation" },
  { id: "12", name: "Groceries" },
  { id: "13", name: "Obi" },
  { id: "14", name: "Computer parts" },
];

const AllListsScreen = ({ navigation }: AllListsScreenProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [allLists, setAllLists] = useState<List[]>([]);

  // Hur gör jag för att lägga till data som jag får från Firestore i min allLists ?
  useEffect(() => {
    getData2();
  }, []);

  const getData2 = () => {
    console.log("steg 1");

    const listRef = collection(db, "lists");
    const q = query(listRef, where("userId", "==", auth?.currentUser?.email));
    let dataArray = [] as DocumentData[];
    console.log("steg 2");
    getDocs(q).then((querySnapshot) => {
      dataArray = querySnapshot.docs.map((q) => q.data());

      setAllLists(dataArray as List[]);
    });
  };

  // Verkar fungera korrekt men dubbelkolla sen när firebase är uppe ifall listan försvinner
  const onDismiss = useCallback((id: string) => {
    const index = allLists.findIndex((item) => item.id === id);
    if (index !== -1) {
      allLists.splice(index, 1);
    }
  }, []);

  const addList = () => {
    if (textInput == "") {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please input text",
        position: "top",
        topOffset: 80,
      });
    } else {
      const newList = {
        id: Math.random().toString(),
        name: textInput,
      };

      setAllLists([...allLists, newList]);
      setTextInput("");
      setModalVisible(!modalVisible);
    }
  };

  const addData = async () => {
    if (textInput !== "") {
      await addDoc(collection(db, "lists"), {
        items: {},
        name: textInput,
        userId: auth.currentUser?.email,
      });
      setTextInput("");
      setModalVisible(!modalVisible);
    }
  };

  const renderItem = ({ item }: { item: List }) => {
    return (
      <ListButton
        type="list"
        title={item.name}
        color={theme.primary_lighter.color}
        onPress={() => navigation.navigate(ScreenRoute.LIST_SCREEN)}
        id={item.id}
        onDismiss={onDismiss}
      />
    );
  };

  return (
    <S.Container>
      <AddListModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
        color={theme.primary.color}
        title="Add new list"
        onPress={addData}
        value={textInput}
        onChangeText={(text: string) => setTextInput(text)}
      />
      <ImageBackground
        source={require("../../assets/images/marble-white.jpg")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <S.TopContainer>
          <Header color={theme.secondary.color} title="Your Lists" />
          <S.ButtonContainer>
            <CustomTabBarButton
              color={theme.primary.color}
              onPress={() => setModalVisible(!modalVisible)}
            />
          </S.ButtonContainer>
        </S.TopContainer>
        <S.ListContainer>
          <FlatList
            data={allLists}
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
