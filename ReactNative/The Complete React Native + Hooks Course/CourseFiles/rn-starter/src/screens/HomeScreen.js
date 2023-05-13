import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({navigation}) => {
  //An early exercise was to change the text from "HomeScreen." The course used "Hi There." I went a different direction because in this case, the actual text is less important than the exercise of
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
    <Button
      title="Go to Counter Demo"
      onPress={() => navigation.navigate("Counter")}
    />
    <Button
      title="Go to Color Demo"
      onPress={() => navigation.navigate("Color")}
    />
      <Button
      title="Go to Square Demo"
      onPress={() => navigation.navigate("Square")}
    />
    <Button
      title="Go to Reducer Counter Demo"
      onPress={() => navigation.navigate("ReduceCounter")}
    />
      <Button
      title="Go to Reducer Square Demo"
      onPress={() => navigation.navigate("ReduceSquare")}
    />
     <Button
      title="Go to Text Demo"
      onPress={() => navigation.navigate("Text")}
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
