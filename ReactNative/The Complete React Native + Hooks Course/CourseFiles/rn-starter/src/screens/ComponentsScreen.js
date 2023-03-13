import React from "react";
import { Text, StyleSheet, View } from "react-native";

export const ComponentsScreen = () => {
  const MyName = "Kenneth";

  return (
    <View>
      <Text style={styles.headerStyle}>Getting started with React Native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {MyName}.</Text>
    </View>
  );
};

//Ugh! StyleSheets...  *grumble grumble*
const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 20,
  }
});
