import React from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

import { Home } from './src/screens/Home'
import { CarDetails } from './src/screens/CarDetails'

import theme from './src/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="transparent" translucent />
      <CarDetails />
    </ThemeProvider>
  )
}
