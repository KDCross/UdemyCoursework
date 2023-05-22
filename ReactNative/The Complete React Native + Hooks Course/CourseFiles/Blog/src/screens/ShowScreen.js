import React, { useContext } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Context } from "../context/BlogContext";

export const ShowScreen = ({ route }) => {
  const { state } = useContext(Context);
  const blogID = route.params.id;

  const blogPost = state.find((blogPost) => blogPost.id === blogID);

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
