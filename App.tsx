import React, { useEffect, useState, useCallback } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { RootStackParamList } from "./main/types";
import { UserContext } from "./main/usercontext";
import { TransactionsProvider } from "./main/TransactionsContext";

import { styles } from "./styles/GlobalStyles";

import Main, { screenName as MainName } from "./main/MainScreen";
import ProfilesScreen, { screenName as ProfileName } from "./main/Profile";
import RegistrationScreen, {
  screenName as RegistrationName,
} from "./main/RegistrationScreen";
import LoginScreen, { screenName as LoginName } from "./main/LoginScreen";
import ForgotPasswordScreen, {
  screenName as ForgotPasswordName,
} from "./main/ForgotPasswordScreen";
import HistoryScreen, { screenName as HistoryName } from "./main/HistoryScreen";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator<RootStackParamList>();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [username, setUsername] = useState("");

  const [fontsLoaded, fontError] = useFonts({
    "SF-Bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
    "SF-Medium": require("./assets/fonts/SF-Pro-Display-Medium.otf"),
    "SF-Regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
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
    <View style={{ width: "100%", height: "100%" }} onLayout={onLayoutRootView}>
      <UserContext.Provider value={{ Login: username, SetLogin: setUsername }}>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Stack.Navigator initialRouteName={LoginName}>
            <Stack.Screen
              name={LoginName}
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={ForgotPasswordName}
              component={ForgotPasswordScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={RegistrationName}
              component={RegistrationScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={MainName}
              component={Main}
              options={{ headerShown: false, statusBarStyle: "auto" }}
            />
            <Stack.Screen
              name={ProfileName}
              component={ProfilesScreen}
              options={{ headerShown: false, statusBarStyle: "auto" }}
            />
            <Stack.Screen name={HistoryName} component={HistoryScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserContext.Provider>
    </View>
  );
}
