import React from "react";
import { TouchableOpacity } from "react-native";
import { Feather, EvilIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { CreateScreen } from "../screens/CreateScreen";
import { EditScreen } from "../screens/EditScreen";
import { IndexScreen } from "../screens/IndexScreen";
import { ShowScreen } from "../screens/ShowScreen";

const Stack = createNativeStackNavigator();

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
        <Stack.Screen
          name="Show"
          component={ShowScreen}
          options={({ navigation, route }) => ({
            headerTitle: "Show Blog Post",
            headerRight: () => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Edit", { id: route.params.id })
                }
              >
                <EvilIcons name="pencil" size={35} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen name="Create" component={CreateScreen} />
        <Stack.Screen name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
