import React from "react";
import { Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  //The exercise was to change the text from "HomeScreen." The course used "Hi There." I went a different direction.
  return <Text style={styles.text}>I Like Potatoes</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
