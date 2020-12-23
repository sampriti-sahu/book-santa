import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import WelcomeScreen from "./screens/welcomeScreen.js"

export default function App() {
  return (
 <WelcomeScreen/>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

