import React, { useContext } from "react";
import { FlatList } from "react-native";
import { ActivityIndicator, Colors, Searchbar, View } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantInfo } from "../components/restaurant-info.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  SafeArea,
  SearchContainer,
} from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { LoadingIndicator } from "../../../components/utility/activity.indicator";
import { Search } from "../components/search.component";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = () => {
  const { isLoading, restaurants, error } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <Search />
      {isLoading && <LoadingIndicator />}
      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="padding" size="medium">
              <RestaurantInfo restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
