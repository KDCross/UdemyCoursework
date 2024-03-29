import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import { BlogPostForm } from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

export const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("Index"));
      }}
    />
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
