import 'react-native-gesture-handler';

import React from "react";
import { Text } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{...TransitionPresets.ModalPresentationIOS}}>
      <RestaurantStack.Screen
        name="RestaurantScreen"
        component={RestaurantsScreen}
        options={{ headerShown: false }}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={() => <Text>Restaurant Detail</Text>}
        options={{ headerShown: false }}
      />
    </RestaurantStack.Navigator>
  );
};
