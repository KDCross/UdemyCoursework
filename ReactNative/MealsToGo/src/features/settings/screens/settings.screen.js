import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { List } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import {
  AvatarContainer,
  AvatarIcon,
  SettingsItem,
} from "../components/settings.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { BackgroundScreen } from "../../../components/utility/background-screen";
import { colors } from "../../../infrastructure/theme/colors";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(
    React.useCallback(() => {
      getProfilePicture(user);
    }, [user])
  );

  return (
    <SafeArea>
      <BackgroundScreen>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          <AvatarContainer>
            {!photo && <AvatarIcon />}
            {photo && (
              <Avatar.Image
                size={180}
                source={{ uri: photo }}
                backgroundColor="#2182bd"
              />
            )}
            <Spacer position="top" size="large">
              <Text variant="label">{user.email}</Text>
            </Spacer>
          </AvatarContainer>
        </TouchableOpacity>
        <List.Section>
          <SettingsItem
            title="Favorites"
            description="View your favorites"
            left={(props) => (
              <List.Icon {...props} color={colors.ui.error} icon="heart" />
            )}
            onPress={() => navigation.navigate("Favorites")}
          />
          <Spacer />
          <SettingsItem
            title="Payment"
            left={(props) => <List.Icon {...props} color={colors.ui.secondary} icon="cart" />}
            onPress={() => null}
          />
          <Spacer />
          <SettingsItem
            title="Past Orders"
            left={(props) => (
              <List.Icon {...props} color={colors.ui.secondary} icon="history" />
            )}
            onPress={() => null}
          />
          <Spacer />
          <SettingsItem
            title="Logout"
            left={(props) => <List.Icon {...props} color={colors.ui.secondary} icon="door" />}
            onPress={onLogout}
          />
        </List.Section>
      </BackgroundScreen>
    </SafeArea>
  );
};
