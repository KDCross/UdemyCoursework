import React, { useContext, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Context } from "../context/BlogContext";

export const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.inputStyle}
        value={title}
        onChangeText={(t) => setTitle(t)}
      />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.inputStyle}
        value={content}
        onChangeText={(t) => setContent(t)}
      />
      <Button
        title="Add Blog Post"
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate("Index");
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16,
    marginBottom: 8,
  },
  label: {
    fontSize: 20,
    marginBottom: 8,
  },
  container: {
    padding: 8,
  },
});
