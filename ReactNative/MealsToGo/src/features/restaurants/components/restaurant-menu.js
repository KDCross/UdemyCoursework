import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List, Divider } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const RestaurantMenu = () => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  return (
    <ScrollView>
      <List.Accordion
        title="Breakfast"
        left={(props) => (
          <List.Icon
            {...props}
            icon="bread-slice"
            color={colors.brand.primary}
          />
        )}
        expanded={breakfastExpanded}
        onPress={() => setBreakfastExpanded(!breakfastExpanded)}
      >
        <List.Item title="Eggs Benedict" />
        <Divider />
        <List.Item title="Classic Breakfast" />
      </List.Accordion>
      <Divider />
      <List.Accordion
        title="Lunch"
        left={(props) => (
          <List.Icon {...props} icon="hamburger" color={colors.brand.primary} />
        )}
        expanded={lunchExpanded}
        onPress={() => setLunchExpanded(!lunchExpanded)}
      >
        <List.Item title="Burger w/ Fries" />
        <Divider />
        <List.Item title="Steak Sandwich" />
        <Divider />
        <List.Item title="Mushroom Soup" />
      </List.Accordion>
      <Divider />
      <List.Accordion
        title="Dinner"
        left={(props) => (
          <List.Icon
            {...props}
            icon="food-variant"
            color={colors.brand.primary}
          />
        )}
        expanded={dinnerExpanded}
        onPress={() => setDinnerExpanded(!dinnerExpanded)}
      >
        <List.Item title="Spaghetti Bolognese" />
        <Divider />
        <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
        <Divider />
        <List.Item title="Steak Frites" />
      </List.Accordion>
      <Divider />
      <List.Accordion
        title="Drinks"
        left={(props) => (
          <List.Icon {...props} icon="cup" color={colors.brand.primary} />
        )}
        expanded={drinksExpanded}
        onPress={() => setDrinksExpanded(!drinksExpanded)}
      >
        <List.Item title="Coffee" />
        <Divider />
        <List.Item title="Tea" />
        <Divider />
        <List.Item title="Modelo" />
        <Divider />
        <List.Item title="Coke" />
        <Divider />
        <List.Item title="Fanta" />
      </List.Accordion>
    </ScrollView>
  );
};
