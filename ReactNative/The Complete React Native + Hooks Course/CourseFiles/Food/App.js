import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchScreen } from "./src/screens/SearchScreen";
import { ResultsShowScreen } from "./src/screens/ResultsShowScreen";

const Stack = createNativeStackNavigator();
 
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Business Search">
        <Stack.Screen name="Business Search" component={SearchScreen} />
        <Stack.Screen name="Results Show" component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 
export default App;