import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CreateScreen } from "../screens/CreateScreen";
import { IndexScreen } from "../screens/IndexScreen";
import { ShowScreen } from "../screens/ShowScreen";

const Stack = createNativeStackNavigator();

const createPost = (navigation) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Create")}>
      <Ionicons name="add-outline" size={30} color="black" />
    </TouchableOpacity>
  );
};

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={({ navigation }) => ({
            headerTitle: "Blogs",
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                <Feather name="plus" size={30} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Show" component={ShowScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
