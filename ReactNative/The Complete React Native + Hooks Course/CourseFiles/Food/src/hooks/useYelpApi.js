import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
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

  useEffect(() => {
    searchApi("pasta");
  }, []);
  
  return [searchApi, results, errorMessage];
};
