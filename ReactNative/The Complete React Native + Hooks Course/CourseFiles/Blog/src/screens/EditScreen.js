import React, { useContext } from "react";
import { StyleSheet } from "react-native";

import { BlogPostForm } from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

export const EditScreen = ({ navigation, route }) => {
  const { state, editBlogPost } = useContext(Context);
  const blogID = route.params.id;
  const blogPost = state.find((blogPost) => blogPost.id === blogID);
  
  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(blogID, title, content, () => navigation.pop());
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
