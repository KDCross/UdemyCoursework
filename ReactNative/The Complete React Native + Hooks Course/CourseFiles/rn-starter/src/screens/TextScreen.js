import React, { useState } from "react";
import { Button, Image, Text, TextInput, StyleSheet, View } from "react-native";

export const TextScreen = () => {
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text style={styles.password}>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
      />
      {password.length < 4 ? (
        <Text>Password must be at least 4 characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  password: {
    margin: 15,
  },
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
  text: {
    margin: 15,
  },
});
