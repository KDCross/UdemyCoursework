import React from "react";
import { Image, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import Svg, { SvgXml } from "react-native-svg";
import open from "../../../../assets/open";
import star from "../../../../assets/star";

//import { RestaurantCard } from "./restaurant-cards.js";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  elevation: 8;
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[1]};
`;

const OpenNow = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const ClosedNow = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.text.error};
  padding-right: ${(props) => props.theme.space[1]};
`;

const IconType = styled.View`
  padding-left: ${(props) => props.theme.space[1]};
`;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

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
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Rating>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
          <OpenNow>
            <ClosedNow>
              {isClosedTemporarily && <Text>CLOSED TEMPORARILY</Text>}
            </ClosedNow>
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          </OpenNow>
          <IconType>
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </IconType>
        </Rating>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
