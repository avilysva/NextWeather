import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium
} from "@expo-google-fonts/roboto";

import theme from "./src/global/styles/theme";
import { HomeScreen, } from './src/screens/HomeScreen';
import AppLoading from 'expo-app-loading';
import { ScreenContainer } from './src/components/ScreenContainer';
import { StatusBar } from 'expo-status-bar';
import { UserContextProvider } from './src/hooks/useUser';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium
  })

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <UserContextProvider>
          <ScreenContainer>
            <StatusBar
              style='light'
              backgroundColor={theme.colors.primary}
            />
            <AppRoutes />
          </ScreenContainer>
        </UserContextProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}