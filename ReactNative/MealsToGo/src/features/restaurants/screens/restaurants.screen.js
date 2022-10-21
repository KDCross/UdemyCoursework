import React from "react";
import {
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
  } from "react-native";
import { Searchbar } from "react-native-paper";
import { StatusBar as ExpoStatusBar } from "expo-status-bar"; //In the course, they are using this. I intend to just use the default react native StatusBar if I can.
import { RestaurantInfo } from "../components/restauraint-info.component";

export const RestaurantsScreen = () => (
    <SafeAreaView style={styles.container}>
      <View>
          <Searchbar />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    },
    search: {
      flex: 0.5,
      fontSize: 24,
      fontWeight: "500",
      backgroundColor: "green",
    },
    list: {
      flex: 8,
      fontSize: 24,
      fontWeight: "500",
      backgroundColor: "blue",
    },
  });  