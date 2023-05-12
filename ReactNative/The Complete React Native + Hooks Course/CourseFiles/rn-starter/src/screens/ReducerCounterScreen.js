import React, { useReducer } from "react";
import { Button, Image, Text, StyleSheet, View } from "react-native";

const AMOUNT = 1;

const reducer = (state, action) => {
  //state === { count: number }
  //action === { type: "increment" || "decrement", payload: 1 }

  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + action.payload };
    case "decrease":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

export const ReducerCounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "increase", payload: AMOUNT })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrease", payload: AMOUNT })}
      />
      <Text>Current Count: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
