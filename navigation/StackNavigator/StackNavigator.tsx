import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import LoginScreen from "../../screens/LoginScreen";
import { RootStackParamList } from "../types";
import { ScreenRoute } from "../constants";
import ListSettingsScreen from "../../screens/ListSettingsScreen";
import SignupScreen from "../../screens/SignupScreen";
import ListScreen from "../../screens/ListScreen/ListScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ScreenRoute.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={ScreenRoute.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen
        name={ScreenRoute.LIST_SETTINGS_SCREEN}
        component={ListSettingsScreen}
      />
      <Stack.Screen name={ScreenRoute.SIGNUP_SCREEN} component={SignupScreen} />
      <Stack.Screen name={ScreenRoute.LIST_SCREEN} component={ListScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
