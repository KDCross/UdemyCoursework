import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${props => props.theme.colors.bg.secondary};
`;
//their code has "(props) => " in front of the StatusBar.currentHeight bit after margin-top. For some reason, that isn't working for me, but if I remove the props call, it works fine.

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const MapSearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  position: absolute;
  z-index: 999;
  width: 100%
`;