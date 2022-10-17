import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { StatusBar as ExpoStatusBar } from "expo-status-bar"; //In the course, they are using this. I intend to just use the default react native StatusBar if I can.
import Searchbox from "./src/components/Searchbox";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
          <Searchbox />
      </View>
      <View style={styles.list}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    flex: 0.5,
    fontSize: 24,
    fontWeight: "500",
    backgroundColor: "green",
  },
  list: {
    flex: 8,
    fontSize: 24,
    fontWeight: "500",
    backgroundColor: "blue",
  },
});
