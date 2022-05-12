import React from 'react';
import AppLoading from "expo-app-loading";

import { 
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import {Inter_600SemiBold} from '@expo-google-fonts/inter';
import { 
  useFonts,
  Montserrat_700Bold,
  Montserrat_400Regular,
  Montserrat_300Light
} from '@expo-google-fonts/montserrat';

import { Login } from "./src/pages/Login";

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Montserrat_700Bold,
    Montserrat_400Regular,
    Montserrat_300Light,
    Inter_600SemiBold
  }); 

  if(!fontsLoaded) return (
    <AppLoading/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Login />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
