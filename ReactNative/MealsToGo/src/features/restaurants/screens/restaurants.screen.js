import React from "react";
import { StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar"; //In the course, they are using this. I intend to just use the default react native StatusBar if I can.
import { RestaurantInfo } from "../components/restaurant-info.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";


const List = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <FlatList
      data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
      renderItem={() => (
        <Spacer position="padding" size="medium">
          <RestaurantInfo />
        </Spacer>
      )}
      keyExtractor={(item) => item.name}
    />
  </SafeArea>
);

//<List>
//  <RestaurantInfo />
//</List>
