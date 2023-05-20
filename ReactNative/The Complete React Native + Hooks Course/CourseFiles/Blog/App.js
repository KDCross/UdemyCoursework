import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppNavigation } from "./src/components/navigation";
import { IndexScreen } from "./src/screens/IndexScreen";
import { BlogProvider } from "./src/context/BlogContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <BlogProvider>
      <AppNavigation />
    </BlogProvider>
  );
}

const styles = StyleSheet.create({});
