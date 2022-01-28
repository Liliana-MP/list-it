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
  deleteDoc,
  doc,
} from "firebase/firestore";

type AllListsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoute.MAIN_SCREEN
>;

const AllListsScreen = ({ navigation }: AllListsScreenProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [allLists, setAllLists] = useState<List[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const listRef = collection(db, "lists");
    const q = query(listRef, where("userId", "==", auth?.currentUser?.email));
    let dataArray = [] as DocumentData[];
    getDocs(q).then((querySnapshot) => {
      querySnapshot.docs.forEach((q) =>
        dataArray.push({
          id: q.id,
          name: q.data().name,
          items: q.data().items,
        })
      );
      setAllLists(dataArray as List[]);
    });
  };

  const onDismiss = useCallback(async (id: string) => {
    console.log("id", id);
    const index = allLists.findIndex((item) => item.id === id);
    if (index !== -1) {
      allLists.splice(index, 1);
    }

    await deleteDoc(doc(db, "lists", id));
  }, []);

  const addData = async () => {
    if (textInput !== "") {
      await addDoc(collection(db, "lists"), {
        items: {},
        name: textInput,
        userId: auth.currentUser?.email,
      });
      setTextInput("");
      getData();
      setModalVisible(!modalVisible);
    } else {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please input text",
        position: "top",
        topOffset: 80,
      });
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
