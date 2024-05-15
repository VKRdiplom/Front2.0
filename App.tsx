import React, { useEffect, useState, useCallback } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { styles } from './styles/GlobalStyles';
import Main, { screenName as MainName } from './main/MainScreen'

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'SF-Bold': require('./assets/fonts/SF-Pro-Display-Bold.otf'),
    'SF-Medium': require('./assets/fonts/SF-Pro-Display-Medium.otf'),
    'SF-Regular': require('./assets/fonts/SF-Pro-Display-Regular.otf'),
    // 'SF-Heavy': require('./assets/fonts/SF-Pro-Display-Heavy.otf'),
    // 'SF-Semibold': require('./assets/fonts/SF-Pro-Display-Semibold.otf'),
    // 'SF-Black': require('./assets/fonts/SF-Pro-Display-Black.otf'),
    // 'SF-Light': require('./assets/fonts/SF-Pro-Display-Light.otf'),
    // 'SF-Thin': require('./assets/fonts/SF-Pro-Display-Thin.otf'),
    // 'SF-Ultralight': require('./assets/fonts/SF-Pro-Display-Ultralight.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    // console.log ('await', fontsLoaded, '\n', fontError)
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  return (
    <View style={{width: '100%', height: '100%'}} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <StatusBar style="auto"
        />
        <Stack.Navigator>
          <Stack.Screen name={MainName} component={Main} options={{ headerShown: false, statusBarStyle: 'auto'}} />

        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );

};