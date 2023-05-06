import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({navigation}) => {
  //The exercise was to change the text from "HomeScreen." The course used "Hi There." I went a different direction because in this case, the actual text is less important than the exercise of
  //changing the text.
  return (
    <View>
      <Text style={styles.text}>I like Potatoes!</Text>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate("Components")}
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
      title="Go to Image Demo"
      onPress={() => navigation.navigate("Image")}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button: {
    fontSize: 20,
    color: "blue",
  },
});

export default HomeScreen;
