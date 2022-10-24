import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

export const RestaurantCard = () => (
    <Card>
        <Card.Content>
            <Card.Cover source={{ uri: 'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg' }} />
            <Title>Some Restaurant</Title>
        </Card.Content>
    </Card>
);