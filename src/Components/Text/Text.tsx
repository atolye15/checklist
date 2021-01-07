import React from 'react';
import {Text as NativeText, TextProps} from 'react-native';
import {withTheme, ThemeType} from '../../Theming';

interface Props extends TextProps {
  theme: ThemeType;
  light?: boolean;
  weight?: 'thin' | 'regular' | 'medium' | 'semiBold' | 'bold';
}

const Text: React.FC<Props> = (props) => {
  const {theme, light, weight, style, children, ...textProps} = props;

  return (
    <NativeText
      style={[
        {
          color: light ? theme.colors.textLight : theme.colors.text,
          ...theme.fonts.regular,
        },
        weight === 'thin' && theme.fonts.thin,
        weight === 'regular' && theme.fonts.regular,
        weight === 'medium' && theme.fonts.medium,
        weight === 'semiBold' && theme.fonts.semiBold,
        weight === 'bold' && theme.fonts.bold,
        style,
      ]}
      {...textProps}
    >
      {children}
    </NativeText>
  );
};

export default React.memo(withTheme(Text));
