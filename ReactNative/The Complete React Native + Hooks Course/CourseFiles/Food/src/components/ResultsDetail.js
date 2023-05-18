import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export const ResultsDetail = ({ itemResult }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: itemResult.image_url }} />
      <Text style={styles.nameStyle}>{itemResult.name}</Text>
      <Text>{itemResult.rating} Stars, {itemResult.rewview_count} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 4,
  },
  nameStyle: {
    fontWeight: "bold",
  },
  container: {
    marginLeft: 16,
  },
});
