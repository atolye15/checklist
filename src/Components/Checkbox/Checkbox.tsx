/* eslint-disable react-native/no-color-literals */
import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, Image, StyleSheet} from 'react-native';
import {withTheme, ThemeType} from '../../Theming';

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

export default React.memo(withTheme(Checkbox));
