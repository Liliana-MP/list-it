import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import Toast from "react-native-toast-message";
import { LogBox } from "react-native";

export default function App() {
  LogBox.ignoreLogs(["Setting a timer"]);

  const [loaded] = useFonts({
    "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "Montserrat-Thin": require("./assets/fonts/Montserrat-Thin.ttf"),
    "Satisfy-Regular": require("./assets/fonts/Satisfy-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StackNavigator />
        <Toast />
      </SafeAreaView>
    </NavigationContainer>
  );
}
