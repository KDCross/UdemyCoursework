import React, { useContext, useState } from "react";

import {
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
} from "../components/account.styles";
import { BackgroundScreen } from "../../../components/utility/background-screen";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { LoadingIndicator } from "../../../components/utility/activity.indicator";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isLoading, onLogin } = useContext(AuthenticationContext);

  return (
    <BackgroundScreen>
      <AccountCover />
      <Text variant="title">Meals To Go</Text>
      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          mode="outlined"
          textContentType="emailAddress"
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer position="padding" size="medium" />
        <AuthInput
          label="Password"
          value={password}
          mode="outlined"
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />
        {error && (
          <Spacer size="medium">
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
        <Spacer position="padding" size="medium" />
        {!isLoading ? (
          <AuthButton
            icon="account-lock-open"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        ) : (
          <LoadingIndicator />
        )}
      </AccountContainer>
      <Spacer position="padding" size="large" />
      <AuthButton
        icon="account-arrow-left"
        mode="contained"
        onPress={() => navigation.goBack()}
      >
        Back
      </AuthButton>
    </BackgroundScreen>
  );
};
