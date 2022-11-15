import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfo } from "../components/restaurant-info.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);
  console.log(restaurantContext)
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <FlatList
        data={restaurantContext.restaurants}
        renderItem={() => (
          <Spacer position="padding" size="medium">
            <RestaurantInfo />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
