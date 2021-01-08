import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import {Text, Card, Button, Checkbox} from '../../Components';
import styles from './styles';

const Home: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const toggleCheckbox = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

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

      <Button
        label="Reset"
        primary
        loadable
        onPress={async () => {
          console.log('pressed');
          await new Promise((resolve) => setTimeout(resolve, 500));
          console.log('done');
        }}
      />

      <Button
        label="Improve this Checklist"
        onPress={() => {
          console.log('pressed');
        }}
      />

      <Checkbox checked={checked} onPress={toggleCheckbox} />
    </View>
  );
};

export default Home;
