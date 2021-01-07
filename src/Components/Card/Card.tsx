import React from 'react';
import {View, Image} from 'react-native';
import {withTheme, ThemeType} from '../../Theming';
import Text from '../Text/Text';
import Chip from '../Chip/Chip';
import styles from './styles';

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
            <Chip key={tag} color={color} title={tag} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default React.memo(withTheme(Card));
