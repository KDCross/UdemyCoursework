import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
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
  container: {
    flex: 1,
  },
  searchbox: {
    flex: 0.4,
    paddingTop: 20,
    paddingLeft: 8,
    fontSize: 25,
    fontWeight: '500',
    backgroundColor: 'green',
  },
  list: {
    flex: 8,
    paddingTop: 20,
    paddingLeft: 8,
    fontSize: 25,
    fontWeight: '500',
    backgroundColor: 'blue',
  }
});
