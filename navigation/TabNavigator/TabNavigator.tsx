import React, { useState } from "react";
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
import theme from "../../theme";
import CustomTabBarButton from "../../components/CustomTabBarButton";
import AccountScreen from "../../screens/AccountScreen";
import NotificationScreen from "../../screens/NotificationScreen";
import AddListModal from "../../components/AddListModal";

const Tab = createBottomTabNavigator<RootTabParamList>();

const Tabs = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 2,
            backgroundColor: "white",
            borderRadius: 15,
            height: 70,
          },
        }}
      >
        <Tab.Screen
          name={TabRoute.HOME_SCREEN}
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <HomeIcon color={theme.primary.color} size={35} />
              ) : (
                <HomeIcon color={theme.color_codes.dark_grey} size={30} />
              );
            },
          }}
        />
        <Tab.Screen
          name={TabRoute.NOTIFICATION_SCREEN}
          component={NotificationScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <BellIcon color={theme.primary.color} size={35} />
              ) : (
                <BellIcon color={theme.color_codes.dark_grey} size={30} />
              );
            },
          }}
        />
        {/* 
        <Tab.Screen
          name={TabRoute.ALL_LISTS_SCREEN}
          component={AllListsScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <CustomTabBarButton
                  onPress={() => setModalVisible(!modalVisible)}
                  color={theme.primary.color}
                />
              );
            },
          }}
        /> */}

        <Tab.Screen
          name={TabRoute.ALL_LISTS_SCREEN}
          component={AllListsScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <ViewListIcon color={theme.primary.color} size={35} />
              ) : (
                <ViewListIcon color={theme.color_codes.dark_grey} size={30} />
              );
            },
          }}
        />
        <Tab.Screen
          name={TabRoute.ACCOUNT_SCREEN}
          component={AccountScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return focused ? (
                <UserCircleIcon color={theme.primary.color} size={35} />
              ) : (
                <UserCircleIcon color={theme.color_codes.dark_grey} size={30} />
              );
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Tabs;
