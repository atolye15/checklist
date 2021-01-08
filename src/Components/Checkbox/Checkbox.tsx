import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, Image} from 'react-native';
import memoizeOne from 'memoize-one';
import {withTheme, ThemeType} from '../../Theming';
import styles from './styles';

interface Props extends TouchableOpacityProps {
  theme: ThemeType;
  checked?: boolean;
}

const Checkbox: React.FC<Props> = (props) => {
  const {theme, checked, ...restProps} = props;

  const memoizedStyles = getMemoizedStyles(checked, theme);

  return (
    <TouchableOpacity style={memoizedStyles.container} {...restProps}>
      <Image source={require('../../Assets/Images/tick.png')} style={memoizedStyles.tick} />
    </TouchableOpacity>
  );
};

const getMemoizedStyles = memoizeOne((checked, theme) => ({
  container: [
    styles.container,
    {borderColor: theme.colors.textLight},
    checked && {borderColor: theme.colors.primary, backgroundColor: theme.colors.primary},
  ],
  tick: [styles.tick, checked && {tintColor: theme.colors.textLight}],
}));

export default React.memo(withTheme(Checkbox));
