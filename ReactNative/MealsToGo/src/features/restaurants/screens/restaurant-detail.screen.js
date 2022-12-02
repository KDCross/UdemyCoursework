import React from "react";

import { RestaurantInfo } from "../components/restaurant-info.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetail = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfo restaurant={restaurant} />
    </SafeArea>
  );
};