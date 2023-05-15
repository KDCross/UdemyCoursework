import React, { useState } from "react";
import { Button, Image, FlatList, StyleSheet, Text, View } from "react-native";

export const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
    paddingTop: 5, //added this to get text out of border
    paddingLeft: 5, //added this to get text out of border
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red",
    paddingTop: 5, //added this to get text out of border
    paddingLeft: 5, //added this to get text out of border
    fontSize: 18,
    ...StyleSheet.absoluteFillObject,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red",
    paddingTop: 5, //added this to get text out of border
    paddingLeft: 5, //added this to get text out of border
  },
});
