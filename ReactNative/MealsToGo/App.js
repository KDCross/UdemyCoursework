import React, { useEffect, useState } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { theme } from "./src/infrastructure/theme";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { Navigation } from "./src/infrastructure/navigation/index";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";

const firebaseConfig = {
  apiKey: "AIzaSyCOaOPcpdhNL7zenb-IxkxEsuxsta_mwYs",
  authDomain: "mealstogo-5851d.firebaseapp.com",
  projectId: "mealstogo-5851d",
  storageBucket: "mealstogo-5851d.appspot.com",
  messagingSenderId: "648897935517",
  appId: "1:648897935517:web:eb5992a04608d8ee6d3c74",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function App() {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular });
  const [latoLoaded] = useLato({ Lato_400Regular });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      signInWithEmailAndPassword(auth, "kdcross@gmail.com", "123456")
        .then((user) => {
          setIsAuthenticated(true);
        })
        .catch((e) => {
          console.log(e);
        });
    }, 2000);
  }, []);

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  if (!isAuthenticated) return null;

  return (
    <ThemeProvider theme={theme}>
      <FavoritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavoritesContextProvider>
    </ThemeProvider>
  );
}
