import React from "react";
import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "margin-top",
  left: "margin-left",
  right: "margin-right",
  bottom: "margin-bottom",
  padding: "padding",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant};
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};

//I really don't understand why he bothered to build this. Everything he did here was manageable with styled components as taught in the previous lessons,
//which is exactly how I already created the spacing for the items he's wrapping in this spacer component. This entire file seems like a waste of time.

//OK, coming back to this the next day, I do see a purpose to this.  With the addition of a "padding" position, this is flexible enough that a styled component 
//that exists solely for the purpose of creating spacing can be replaced with this component.