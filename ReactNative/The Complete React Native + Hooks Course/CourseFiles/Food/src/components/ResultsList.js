import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from '@react-navigation/native';

import { ResultsDetail } from "./ResultsDetail";

export const ResultsList = ({ header, results }) => {
  const navigation = useNavigation();

  if (!results.length){
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerStyle}>{header}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Results Show", {id: item.id})}
            >
              <ResultsDetail itemResult={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 16,
    marginBottom: 4,
  },
  container: {
    marginBottom: 8,
  },
});
