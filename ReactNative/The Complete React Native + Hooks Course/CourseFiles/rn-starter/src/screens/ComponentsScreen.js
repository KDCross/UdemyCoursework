import React from "react";
import { Text, StyleSheet } from "react-native";

export const ComponentsScreen = () => {
  return <Text style={styles.textStyle}>This is the Components Screen</Text>;
};

//Ugh! StyleSheets...  *grumble grumble*
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});
