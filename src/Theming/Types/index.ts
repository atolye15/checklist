type Font = {
  fontFamily: string;
  fontWeight:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
};

export interface Theme {
  dark: boolean;
  fonts: {
    thin: Font;
    regular: Font;
    medium: Font;
    semiBold: Font;
    bold: Font;

    [key: string]: Font;
  };
  colors: {
    primary: string;
    secondary: string;
    text: string;
    textLight: string;
    textReverse: string;
    background: string;
    surface: string;
    buttonBackground: string;
    buttonText: string;

    [key: string]: string;
  };
}
