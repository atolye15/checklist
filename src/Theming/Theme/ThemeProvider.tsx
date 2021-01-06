import {createTheming} from '@callstack/react-theme-provider';
import {LightTheme} from './DefaultTheme';

export const {ThemeProvider, withTheme, useTheme} = createTheming(LightTheme);
