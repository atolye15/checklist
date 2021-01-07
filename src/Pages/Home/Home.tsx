import React from 'react';
import {View} from 'react-native';
import {Text, Card} from '../../Components';
import styles from './styles';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text light weight="bold">
        Test Screen
      </Text>

      <Card
        color="#001bff"
        category="General"
        todoCount={16}
        title="A Remote Day of Atolye15"
        withLogo
        description="You don't know what to do when working remotely? Just follow this checklist and look to my coming, at first light, on the fifth day. At dawn, look to the East 🧙‍♂️"
        tags={['corona-virus', 'remote', 'covid-19']}
      />
    </View>
  );
};

export default Home;
