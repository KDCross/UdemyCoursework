import React from "react";
import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import LottieView from "lottie-react-native";

import { colors } from "../../../infrastructure/theme/colors";

export const AccountCover = styled.View`
  position: absolute;
  width: 100%
  height: 100%
  background-color: rgba(255,255,255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})``;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const AccountTitle = styled.Text`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const StyledLottieView = styled(LottieView).attrs({
  key: "animation",
  autoPlay: true,
  loop: true,
  resizeMode: "cover",
  source: require("../../../../assets/watermelon.json")
})`
  width: 100%;
  height: 40%;
  position: absolute;
  top:  ${(props) => props.theme.space[4]};
`;