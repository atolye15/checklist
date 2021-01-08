import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 24,
    borderColor: 'white',
    backgroundColor: 'transparent',
    marginTop: 2,
    overflow: 'hidden',
  },
  containerChecked: {
    borderColor: 'red',
    backgroundColor: 'red',
  },
  tick: {
    width: 22,
    height: 22,
    tintColor: 'transparent',
  },
  tickChecked: {
    tintColor: 'white',
  },
});

export default styles;
