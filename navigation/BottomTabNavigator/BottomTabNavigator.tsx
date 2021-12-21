import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabActions } from "@react-navigation/native";
import ListScreen from "../../screens/ListScreen/ListScreen";
import HomeScreen from "../../screens/HomeScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="ListScreen" component={ListScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
