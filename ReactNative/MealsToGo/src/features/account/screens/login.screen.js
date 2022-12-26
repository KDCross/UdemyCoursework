import React, { useContext, useState } from "react";
import { TextInput } from "react-native-paper";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
} from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, onLogin } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
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
        <AuthButton
          icon="account-lock-open"
          mode="contained"
          onPress={() => onLogin(email, password)}
        >
          Login
        </AuthButton>
      </AccountContainer>
      <Spacer position="padding" size="large" />
      <AuthButton
        icon="account-arrow-left"
        mode="contained"
        onPress={() => navigation.goBack()}
      >
        Back
      </AuthButton>
    </AccountBackground>
  );
};
