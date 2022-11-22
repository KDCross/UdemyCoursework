import React, { useContext } from "react";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";

import { theme } from "../../infrastructure/theme";

const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const LoadingIndicator = () => (
  <LoadingContainer>
    <Loading size="large" animating={true} color={theme.colors.bg.primary} />
  </LoadingContainer>
);
