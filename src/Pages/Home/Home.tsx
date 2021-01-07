import React from 'react';
import {View} from 'react-native';
import {Text} from '../../Components';
import styles from './styles';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text light weight="bold">
        Test Screen
      </Text>
    </View>
  );
};

export default Home;
