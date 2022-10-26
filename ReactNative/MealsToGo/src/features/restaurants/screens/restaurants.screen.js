import React from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar"; //In the course, they are using this. I intend to just use the default react native StatusBar if I can.
import { RestaurantInfo } from "../components/restaurant-info.component";

const List = styled.View`
  flex: 1;
  padding: 12px;
  background-color: blue;
`;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${(props) => StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: 16px;
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <List>
      <RestaurantInfo />
    </List>
  </SafeArea>
);
