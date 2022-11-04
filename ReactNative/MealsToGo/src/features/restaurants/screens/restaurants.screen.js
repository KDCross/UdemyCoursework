import React from "react";
import { StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar"; //In the course, they are using this. I intend to just use the default react native StatusBar if I can.
import { RestaurantInfo } from "../components/restaurant-info.component";

const List = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
//their code has "(props) => " in front of the StatusBar.currentHeight bit after margin-top. For some reason, that isn't working for me, but if I remove the props call, it works fine.

const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
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
