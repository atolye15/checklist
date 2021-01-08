import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, Image} from 'react-native';
import {withTheme, ThemeType} from '../../Theming';
import styles from './styles';

interface Props extends TouchableOpacityProps {
  theme: ThemeType;
  checked?: boolean;
}

const Checkbox: React.FC<Props> = (props) => {
  const {theme, checked, ...restProps} = props;

  return (
    <TouchableOpacity style={[styles.container, checked && styles.containerChecked]} {...restProps}>
      <Image
        source={require('../../Assets/Images/tick.png')}
        style={[styles.tick, checked && styles.tickChecked]}
      />
    </TouchableOpacity>
  );
};

export default React.memo(withTheme(Checkbox));
