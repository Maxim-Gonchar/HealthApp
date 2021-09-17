import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MainScreen } from './Components/MainScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <MainScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E1621",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
