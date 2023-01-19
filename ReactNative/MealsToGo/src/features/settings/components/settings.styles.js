import styled from "styled-components/native";
import { Avatar, List } from "react-native-paper";
import { Camera } from "expo-camera";

import { colors } from "../../../infrastructure/theme/colors";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  background-color: rgba(255,255,255,0.4);
`;

export const AvatarIcon = styled(Avatar.Icon).attrs({
  backgroundColor: colors.bg.primary,
  size: 180,
  icon: "human",
})`
  padding: ${(props) => props.theme.space[3]};
`;

export const AvatarContainer = styled.View`
  align-items: center;
`;

export const NoFavoritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const ProfileCamera = styled(Camera)`
  width: 100%
  height: 100%
`;

export const GetPermission = styled(SafeArea)`
align-items: center;
justify-content: center;
`;
