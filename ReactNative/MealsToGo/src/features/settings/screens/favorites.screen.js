import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";

import { FavoritesContext } from "../../../services/favorites/favorites.context";

import { RestaurantInfo } from "../../restaurants/components/restaurant-info.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { NoFavoritesArea } from "../components/settings.styles";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return favorites.length ? (
    <SafeArea>
      <FlatList
        data={favorites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="padding" size="medium">
                <RestaurantInfo restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavoritesArea>
      <Text variant="error">No Favorites Yet</Text>
    </NoFavoritesArea>
  );
};
