import React, { useState } from "react";
import { Button, Image, FlatList, StyleSheet, Text, View } from "react-native";

export const FlexBoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  viewOneStyle: {
    borderWidth: 3,
    backgroundColor: "red",
    height: 50,
    width: 50,
  },
  viewTwoStyle: {
    borderWidth: 3,
    backgroundColor: "green",
    height: 50,
    width: 50,
    alignSelf: "flex-end",
  },
  viewThreeStyle: {
    borderWidth: 3,
    backgroundColor: "purple",
    height: 50,
    width: 50,
  },
});
