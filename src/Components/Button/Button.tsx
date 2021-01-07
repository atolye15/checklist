import React, {useState} from 'react';
import {View, TouchableOpacity, TouchableOpacityProps, ActivityIndicator} from 'react-native';
import memoizeOne from 'memoize-one';
import {withTheme, ThemeType} from '../../Theming';
import Text from '../Text/Text';
import styles from './styles';

interface Props extends TouchableOpacityProps {
  theme: ThemeType;
  label: string;
  onPress: () => unknown;
  loadable?: boolean;
  primary?: boolean;
}

const Button: React.FC<Props> = (props) => {
  const {theme, label, onPress, loadable, primary} = props;
  const [loading, setLoading] = useState(false);

  const onButtonPress = async () => {
    if (loadable) setLoading(true);
    await onPress();
    if (loadable) setLoading(false);
  };

  const buttonStyle = getButtonStyle(primary, theme);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={buttonStyle} onPress={onButtonPress}>
        <View style={styles.buttonInner}>
          {loadable && loading ? (
            <ActivityIndicator color={theme.colors.textLight} size={18} style={styles.loader} />
          ) : (
            <></>
          )}
          <Text light weight="bold" style={styles.buttonText}>
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const getButtonStyle = memoizeOne((primary: Props['primary'], theme: Props['theme']) => [
  styles.buttonContainer,
  {backgroundColor: primary ? theme.colors.primary : theme.colors.buttonBackground},
]);

export default React.memo(withTheme(Button));
