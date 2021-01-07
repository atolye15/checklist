import React from 'react';
import {Text as NativeText, TextProps} from 'react-native';
import memoizeOne from 'memoize-one';
import {withTheme, ThemeType} from '../../Theming';

interface Props extends TextProps {
  theme: ThemeType;
  light?: boolean;
  weight?: 'thin' | 'regular' | 'medium' | 'semiBold' | 'bold';
}

const Text: React.FC<Props> = (props) => {
  const {theme, light, weight, style, children, ...textProps} = props;

  const textStyles = getTextStyles(light, theme, weight, style);

  return (
    <NativeText style={textStyles} {...textProps}>
      {children}
    </NativeText>
  );
};

const getTextStyles = memoizeOne(
  (
    light: Props['light'],
    theme: Props['theme'],
    weight: Props['weight'],
    style: TextProps['style'],
  ) => [
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
  ],
);

export default React.memo(withTheme(Text));
