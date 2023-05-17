import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export const ResultsList = ({ header, results }) => {
  return (
    <View>
      <Text style={styles.headerStyle}>{header}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
