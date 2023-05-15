import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { SearchBar } from "../components/SearchBar";

export const SearchScreen = () => {
  const [term, setTerm] = useState("");

  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log("term was submitted")}
      />
      <Text>Search Screen</Text>
      <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "white",
  },
});
