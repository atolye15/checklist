import 'react-native-gesture-handler';

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Router from './src/Router';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Router />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
