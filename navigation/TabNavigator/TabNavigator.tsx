import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import { RootTabParamList } from "../types";
import { ScreenRoute, TabRoute } from "../constants";
import AllListsScreen from "../../screens/AllListsScreen/AllListsScreen";
import {
  HomeIcon,
  ViewListIcon,
  UserCircleIcon,
  BellIcon,
} from "react-native-heroicons/outline";
import {
  HomeIcon as HomeIconSolid,
  UserCircleIcon as UserCircleIconSolid,
  BellIcon as BellIconSolid,
} from "react-native-heroicons/solid";
import theme from "../../theme";
import TabBarAddButton from "../../components/TabBarAddButton";

const Tab = createBottomTabNavigator<RootTabParamList>();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name={TabRoute.HOME_SCREEN}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <HomeIcon color={theme.primary.color} size={50} />
            ) : (
              <HomeIcon color={theme.color_codes.dark_grey} size={30} />
            );
          },
        }}
      />
      <Tab.Screen
        name={TabRoute.NOTIFICATION_SCREEN}
        component={AllListsScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <BellIcon color={theme.primary.color} size={50} />
            ) : (
              <BellIcon color={theme.color_codes.dark_grey} size={30} />
            );
          },
        }}
      />

      <Tab.Screen
        name={TabRoute.ALL_LISTS_SCREEN}
        component={AllListsScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <ViewListIcon color={theme.primary.color} size={50} />
            ) : (
              <ViewListIcon color={theme.color_codes.dark_grey} size={30} />
            );
          },
        }}
      />
      <Tab.Screen
        name={TabRoute.ACCOUNT_SCREEN}
        component={AllListsScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return focused ? (
              <UserCircleIcon color={theme.primary.color} size={50} />
            ) : (
              <UserCircleIcon color={theme.color_codes.dark_grey} size={30} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
