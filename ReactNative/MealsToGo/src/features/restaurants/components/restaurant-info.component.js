import React from "react";
import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

//import { RestaurantCard } from "./restaurant-cards.js";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  elevation: 8;
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const Title = styled(Text)`
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard>
      <Card.Content>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Title>{name}</Title>
      </Card.Content>
    </RestaurantCard>
  );
};

//const styles = StyleSheet.create({
//    card: {backgroundColor: "white"},
//    cover: {backgroundColor: "white"},
//});
