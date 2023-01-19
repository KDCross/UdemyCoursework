import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";
import { SettingsNavigator } from "./settings.navigator";

import { FavoritesContextProvider } from "../../services/favorites/favorites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { colors } from "../theme/colors";

export const Tab = createBottomTabNavigator();

export const TAB_ICON = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

export const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export const TabAppNav = () => (
  <FavoritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator screenOptions={createScreenOptions}>
          <Tab.Screen
            name="Restaurants"
            component={RestaurantsNavigator}
            options={{
              headerShown: false,
              tabBarActiveTintColor: colors.brand.primary,
              tabBarInactiveTintColor: colors.brand.muted,
            }}
          />
          <Tab.Screen
            name="Map"
            component={MapScreen}
            options={{
              headerShown: false,
              tabBarActiveTintColor: colors.brand.primary,
              tabBarInactiveTintColor: colors.brand.muted,
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsNavigator}
            options={{
              headerShown: false,
              tabBarActiveTintColor: colors.brand.primary,
              tabBarInactiveTintColor: colors.brand.muted,
            }}
          />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavoritesContextProvider>
);
