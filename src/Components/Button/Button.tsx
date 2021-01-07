import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {withTheme, ThemeType} from '../../Theming';
import Text from '../Text/Text';

interface Props extends TouchableOpacityProps {
  theme: ThemeType;
  label: string;
  onPress: () => unknown;
  loadable?: boolean;
}

const Button: React.FC<Props> = (props) => {
  const {theme, label, onPress, loadable} = props;
  const [loading, setLoading] = useState(false);

  const onButtonPress = async () => {
    if (loadable) setLoading(true);
    await onPress();
    if (loadable) setLoading(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.buttonContainer, {backgroundColor: theme.colors.buttonBackground}]}
        onPress={onButtonPress}
      >
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

export default React.memo(withTheme(Button));
