import React from "react";
import { Button } from "react-native-paper";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AccountTitle,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";


export const AccountScreen = ({navigation}) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Text variant="title">Meals To Go</Text>
      <AccountContainer>
        <AuthButton
          icon="account-lock-open"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <Spacer position="padding" size="medium" />
        <AuthButton
          icon="account-plus"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
