import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { SearchBar } from "../components/SearchBar";
import { ResultsList } from "../components/ResultsList";
import useYelpApi from "../hooks/useYelpApi";

export const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useYelpApi();

  const filterResultsByPrice = (price) => {
    //price === "$" || "$$" || "$$$"
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          header="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultsList
          header="Bit Pricier"
          results={filterResultsByPrice("$$")}
        />
        <ResultsList
          header="Big Spender"
          results={filterResultsByPrice("$$$")}
        />
        <ResultsList
          header="Stupid Expensive"
          results={filterResultsByPrice("$$$$")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
