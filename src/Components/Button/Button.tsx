import React, {useState} from 'react';
import {View, TouchableOpacity, TouchableOpacityProps, StyleSheet} from 'react-native';
import {withTheme, ThemeType} from '../../Theming';
import Text from '../Text/Text';

interface Props extends TouchableOpacityProps {
  theme: ThemeType;
  label: string;
  onPress: () => unknown;
}

const Button: React.FC<Props> = (props) => {
  const {theme, label, onPress} = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.buttonContainer, {backgroundColor: theme.colors.buttonBackground}]}
        onPress={onPress}
      >
        <View style={styles.buttonInner}>
          <Text light weight="bold" style={styles.buttonText}>
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

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
});

export default React.memo(withTheme(Button));
