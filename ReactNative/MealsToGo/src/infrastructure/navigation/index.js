import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { TabAppNav } from "./bottom.tab.navigation";
import { AccountNavigator } from "./account.navigator.js";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <TabAppNav /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
