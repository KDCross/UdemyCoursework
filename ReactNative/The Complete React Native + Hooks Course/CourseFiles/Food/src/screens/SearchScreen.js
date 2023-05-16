import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { SearchBar } from "../components/SearchBar";
import yelp from "../api/yelp";

export const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    console.log("Hi there!");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (e) {
      setErrorMessage("Something went wrong.");
    }
  };

  //Call searchApi when component first rendered to give a default result.
  //Done as example in course to show why it's bad practice.
  //searchApi("pasta");
  //This creates an infinite loop by running the searchApi constantly.

  return (
    <View style={styles.background}>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "white",
  },
});
