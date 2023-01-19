import styled from "styled-components/native";

export const BackgroundScreen = styled.ImageBackground.attrs({
  source: require("../../../assets/home_bg.jpg"),
})`
position: absolute;
height: 100%;
width: 100%;
`;