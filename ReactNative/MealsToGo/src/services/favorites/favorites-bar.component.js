import React from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";

import { Spacer } from "../../components/spacer/spacer.component";
import { CompactRestaurantInfo } from "../../components/restaurant/compact-restaurant-info.component";
import { Text } from "../../components/typography/text.component";

export const FavoritesBar = ({ favorites, onNavigate }) => {
  if(!favorites.length){
    return null;
  }
    return (
    <Spacer variant="padding.large">
      <Spacer position="left" size="large">
        <Text variant="caption">Favorites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer variant="left.medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </Spacer>
  );
};
