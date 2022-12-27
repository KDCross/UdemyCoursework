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
import { LoadingIndicator } from "../../../components/utility/activity.indicator";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { error, isLoading, onRegister } = useContext(AuthenticationContext);

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
        <AuthInput
          label="Repeat Password"
          value={repeatedPassword}
          mode="outlined"
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setRepeatedPassword(p)}
        />
        {error && (
          <Spacer size="medium">
            <Text variant="error">{error}</Text>
          </Spacer>
        )}
        <Spacer position="padding" size="medium" />
        {!isLoading ? (
          <AuthButton
            icon="account-plus"
            mode="contained"
            onPress={() => onRegister(email, password, repeatedPassword)}
          >
            Register
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
    </AccountBackground>
  );
};
