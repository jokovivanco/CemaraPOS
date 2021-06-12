import 'react-native-gesture-handler'
import React from 'react'

import Router from './src/navigations'

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { colors } from './src/assets/color';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary,
    accent: colors.secondary,
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Router />
    </PaperProvider>
  );
}