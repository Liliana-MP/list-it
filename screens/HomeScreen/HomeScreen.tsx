import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
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
import { ScrollView } from "react-native-gesture-handler";
import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../../firebase";

type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenRoute.MAIN_SCREEN
>;

const user = { id: "1", firstName: "Liliana", lastName: "Montini Pitra" };

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [allLists, setAllLists] = useState<List[]>([]);
  const [userName, setUserName] = useState("");
  const user = auth.currentUser;

  useEffect(() => {
    getData();
    getUser();
  }, []);

  const getUser = async () => {
    if (user !== null && user.email !== null) {
      const userRef = doc(db, "users", user.email);
      const getUser = await getDoc(userRef);

      const getName = getUser.data().firstname;
      setUserName(getName);
    }
  };

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

  const renderItem = ({ item }: { item: List }) => {
    let doneSum = "";
    let ongoingSum = "";

    const convertedItems = [] as Item[];
    for (let i in item.items) {
      const newItem = {
        id: item.items[i].id,
        name: item.items[i].name,
        done: item.items[i].done,
      };
      convertedItems.push(newItem);
    }

    if (convertedItems) {
      doneSum = convertedItems
        .filter((item) => item.done === true)
        .length.toString();
      ongoingSum = convertedItems
        .filter((item) => item.done === false)
        .length.toString();
    }

    return (
      <Button
        type="square"
        title={item.name}
        textColor={theme.secondary.color}
        color={theme.color_codes.white}
        onPress={() => navigation.navigate(ScreenRoute.LIST_SCREEN, item)}
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
      <UpdateBox userName={userName} />

      <S.Container>
        <FlatList
          data={allLists}
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
