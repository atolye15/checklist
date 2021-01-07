import React from 'react';
import {View} from 'react-native';
import memoizeOne from 'memoize-one';
import Text from '../Text/Text';
import styles from './styles';

interface Props {
  color: string;
  title: string;
}

const Chip: React.FC<Props> = (props) => {
  const {color, title} = props;

  const chipTextStlyes = getChipTextStyles(color);

  return (
    <View style={styles.chip}>
      <Text light weight="bold" style={chipTextStlyes}>
        #{title}
      </Text>
    </View>
  );
};

const getChipTextStyles = memoizeOne((color) => [styles.chipText, {backgroundColor: color}]);

export default React.memo(Chip);
