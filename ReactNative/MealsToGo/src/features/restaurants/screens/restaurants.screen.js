import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";

import { RestaurantInfo } from "../components/restaurant-info.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { FadeInView } from "../../../components/animations/fade.animation";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { LoadingIndicator } from "../../../components/utility/activity.indicator";
import { Search } from "../components/search.component";
import { FavoritesBar } from "../../favorites/favorites-bar.component";
import { BackgroundScreen } from "../../../components/utility/background-screen";

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants, error } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <SafeArea>
      <BackgroundScreen>
        <Search
          isFavoritesToggled={isToggled}
          onFavoritesToggle={() => setIsToggled(!isToggled)}
        />
        {isToggled && (
          <FavoritesBar
            favorites={favorites}
            onNavigate={navigation.navigate}
          />
        )}
        {isLoading && <LoadingIndicator />}
        <FlatList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: item,
                  })
                }
              >
                <FadeInView>
                  <Spacer position="padding" size="medium">
                    <RestaurantInfo restaurant={item} />
                  </Spacer>
                </FadeInView>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </BackgroundScreen>
    </SafeArea>
  );
};
