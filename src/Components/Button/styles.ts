import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  buttonContainer: {
    marginHorizontal: 12,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 56,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 17,
    lineHeight: 24,
  },
  buttonInner: {
    flexDirection: 'row',
  },
  loader: {
    position: 'absolute',
    left: -24,
    top: 4,
  },
});

export default styles;
