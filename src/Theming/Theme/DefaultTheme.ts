import {Theme} from '../Types';

// TODO: semi-bold font doesn't work, don't know why yet. Probably wrong font file

export const LightTheme: Theme = {
  dark: false,
  fonts: {
    thin: {
      fontFamily: 'Inter-Thin',
      fontWeight: '100',
    },
    regular: {
      fontFamily: 'Inter-Regular',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'Inter-Medium',
      fontWeight: '500',
    },
    semiBold: {
      fontFamily: 'Inter-SemiBold',
      fontWeight: '600',
    },
    bold: {
      fontFamily: 'Inter-Bold',
      fontWeight: '700',
    },
  },
  colors: {
    primary: '#FE2D5B',
    secondary: '#181C27',
    text: '#323232',
    textLight: '#000000',
    textReverse: '#FEFEFE',
    background: '#F2F2F2',
    surface: '#FFFFFF',
    buttonBackground: '#FFFFFF',
    buttonText: '#FF4747',
  },
};

export const DarkTheme: Theme = {
  dark: true,
  fonts: {
    thin: {
      fontFamily: 'Inter-Thin',
      fontWeight: '100',
    },
    regular: {
      fontFamily: 'Inter-Regular',
      fontWeight: '400',
    },
    medium: {
      fontFamily: 'Inter-Medium',
      fontWeight: '500',
    },
    semiBold: {
      fontFamily: 'Inter-SemiBold',
      fontWeight: '600',
    },
    bold: {
      fontFamily: 'Inter-Bold',
      fontWeight: '700',
    },
  },
  colors: {
    primary: '#FE2D5B',
    secondary: '#181C27',
    text: '#79849E',
    textLight: '#E7EFFF',
    textReverse: '#323232',
    background: '#101013',
    surface: '#181C27',
    buttonBackground: '#232939',
    buttonText: '#E7EFFF',
  },
};
