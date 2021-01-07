import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    borderTopWidth: 6,
    borderRadius: 4,
    padding: 16, // 24
    margin: 12, // 16
    marginBottom: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerCategory: {
    fontSize: 18,
    flex: 1,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 12,
  },
  titleText: {
    fontSize: 18,
  },
  titleLogo: {
    width: 24,
    height: 24,
    marginRight: 6,
  },
  description: {
    fontSize: 16,
  },
  tags: {
    marginTop: 28,
    flexDirection: 'row',
  },
  tag: {
    paddingHorizontal: 4,
  },
  tagText: {
    paddingVertical: 3,
    paddingHorizontal: 6,
    borderRadius: 3,
    fontSize: 12,
  },
});

export default styles;
