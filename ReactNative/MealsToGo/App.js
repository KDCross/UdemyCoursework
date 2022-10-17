import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'; //In the course, they are using this. I intend to just use the default react native StatusBar if I can.
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

const isAndroid = Platform.OS === 'android';
export default function App() {
  return (
    <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
      <View style={styles.searchbox}>
        <Text>Search</Text>
      </View>
      <View style={styles.list}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchbox: {
    flex: 0.5,
    fontSize: 24,
    fontWeight: '500',
    backgroundColor: 'green',
  },
  list: {
    flex: 8,
    fontSize: 24,
    fontWeight: '500',
    backgroundColor: 'blue',
  }
});
