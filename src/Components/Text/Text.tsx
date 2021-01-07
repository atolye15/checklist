import React from 'react';
import {Text as NativeText, TextProps} from 'react-native';
import {withTheme, ThemeType} from '../../Theming';

interface Props extends TextProps {
  theme: ThemeType;
  light?: boolean;
}

const Text: React.FC<Props> = (props) => {
  const {theme, light, style, children, ...textProps} = props;

  return (
    <NativeText
      style={[
        {
          color: light ? theme.colors.textLight : theme.colors.text,
          ...theme.fonts.regular,
        },
        style,
      ]}
      {...textProps}
    >
      {children}
    </NativeText>
  );
};

export default React.memo(withTheme(Text));
