import * as React from 'react';
import { Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

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

};

