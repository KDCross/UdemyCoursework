import React, { createContext } from "react";
import { StyleSheet, Text, View } from "react-native";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const blogPosts = [{ title: "Blog Post #1" }, { title: "Blog Post #2" }];

  return (
    <BlogContext.Provider value={blogPosts}>
        {children}
    </BlogContext.Provider>
  );
};
