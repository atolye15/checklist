import {StyleSheet} from 'react-native';

const transparent = 'transparent';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 24,
    backgroundColor: transparent,
    marginTop: 2,
    overflow: 'hidden',
  },
  tick: {
    width: 22,
    height: 22,
    tintColor: transparent,
  },
});

export default styles;
