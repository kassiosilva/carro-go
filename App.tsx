import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { SignIn } from './src/screens/SignIn';

import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor="transparent" translucent  />
      <SignIn />
    </ThemeProvider>
  );
}
