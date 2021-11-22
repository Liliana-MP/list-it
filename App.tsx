import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StackNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}
