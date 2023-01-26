import React from "react";

import {
  AccountContainer,
  AccountCover,
  AuthButton,
  StyledLottieView,
} from "../components/account.styles";
import { BackgroundScreen } from "../../../components/utility/background-screen";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <SafeArea>
    <BackgroundScreen>
      <AccountCover />
      <StyledLottieView />
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
    </BackgroundScreen>
    </SafeArea>
  );
};
