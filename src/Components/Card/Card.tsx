import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {withTheme, ThemeType} from '../../Theming';
import Text from '../Text/Text';

interface Props {
  theme: ThemeType;
  color: string;
  category: string;
  todoCount: number;
  title: React.ReactNode;
  description: string;
  tags: Array<string>;
  withLogo?: boolean;
}

const Card: React.FC<Props> = (props) => {
  const {theme, color, category, todoCount, title, withLogo, description, tags} = props;

  return (
    <View style={[styles.cardContainer]}>
      <View style={[styles.card, {borderTopColor: color, backgroundColor: theme.colors.surface}]}>
        <View style={styles.header}>
          <Text weight="medium" style={styles.headerCategory}>
            {category}
          </Text>
          <Text>{todoCount} To-Do&apos;s</Text>
        </View>

        <View style={styles.title}>
          {withLogo ? (
            <Image
              source={require('../../Assets/Images/LogoSquare.png')}
              style={styles.titleLogo}
            />
          ) : (
            <></>
          )}

          <Text light weight="bold" style={styles.titleText}>
            {title}
          </Text>
        </View>

        <Text style={styles.description}>{description}</Text>

        <View style={styles.tags}>
          {tags.map((tag) => (
            <View style={styles.tag}>
              <Text light weight="bold" style={[styles.tagText, {backgroundColor: color}]}>
                #{tag}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

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

export default React.memo(withTheme(Card));
