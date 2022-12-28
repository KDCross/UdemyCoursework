import React from "react";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { initializeApp } from "firebase/app";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation/index";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyCOaOPcpdhNL7zenb-IxkxEsuxsta_mwYs",
  authDomain: "mealstogo-5851d.firebaseapp.com",
  projectId: "mealstogo-5851d",
  storageBucket: "mealstogo-5851d.appspot.com",
  messagingSenderId: "648897935517",
  appId: "1:648897935517:web:eb5992a04608d8ee6d3c74",
};

const app = initializeApp(firebaseConfig);
//const auth = getAuth(app);

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <Navigation />
      </AuthenticationContextProvider>
    </ThemeProvider>
  );
}
