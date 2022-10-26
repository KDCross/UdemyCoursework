import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar"; //In the course, they are using this. I intend to just use the default react native StatusBar if I can.
import { RestaurantInfo } from "../components/restaurant-info.component";

const Container = styled.SafeAreaView`
  flex: 1;
  marginTop: ${props => StatusBar.currentHeight}px;
`;

const List = styled.View`
  flex: 1;
  padding: 12px;
  background-color: blue;
`;

export const RestaurantsScreen = () => (
  <Container>
    <View>
      <Searchbar />
    </View>
    <List>
      <RestaurantInfo />
    </List>
  </Container>
);

//const styles = StyleSheet.create({
  //container: {
  //  flex: 1,
  //  marginTop: StatusBar.currentHeight,
  //},
  //list: {
  //  flex: 1,
  //  padding: 12,
  //  fontSize: 24,
  //  fontWeight: "500",
  //  backgroundColor: "blue",
  //},
//});
