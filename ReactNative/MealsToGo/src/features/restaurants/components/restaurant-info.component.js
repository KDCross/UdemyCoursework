import React from "react";
import { SvgXml } from "react-native-svg";
import open from "../../../../assets/open";
import star from "../../../../assets/star";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Rating,
  OpenNow,
  Icon,
} from "../../restaurants/components/restaurant-info-card.styles";
import { Favorite } from "../../../components/favorites/favorite.component";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard>
      <Favorite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Spacer position="padding" size="large">
        <Text variant="label" size="title">
          {name}
        </Text>
        <Rating>
          {ratingArray.map((_, i) => (
            <SvgXml
              key={`star-${placeId}-${i}`}
              xml={star}
              width={20}
              height={20}
            />
          ))}
          <OpenNow>
            <Spacer position="right" size="medium">
              {isClosedTemporarily && (
                <Text variant="error" size="body">
                  CLOSED TEMPORARILY
                </Text>
              )}
            </Spacer>
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          </OpenNow>
          <Spacer position="left" size="medium">
            <Icon source={{ uri: icon }} />
          </Spacer>
        </Rating>
        <Address>{address}</Address>
      </Spacer>
    </RestaurantCard>
  );
};
