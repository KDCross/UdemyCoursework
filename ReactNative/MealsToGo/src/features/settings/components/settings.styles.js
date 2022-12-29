import styled from "styled-components/native";
import { Avatar, List, Text } from "react-native-paper";

import { colors } from "../../../infrastructure/theme/colors";

export const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

export const AvatarImage = styled(Avatar.Icon).attrs({
  backgroundColor: colors.bg.primary,
  size: 180,
  icon: "human",
})`
  padding: ${(props) => props.theme.space[3]};
`;

export const AvatarContainer = styled.View`
  align-items: center;
`;
