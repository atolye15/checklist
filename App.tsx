import 'react-native-gesture-handler';

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Router from './src/Router';
import {ThemeProvider, DarkTheme} from './src/Theming';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <View style={styles.container}>
        <Router />
      </View>
    </ThemeProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
