import React from 'react';
import {NavigationContainer, DefaultTheme as LightTheme, DarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ThemeType, withTheme} from './Theming';

import Home from './Pages/Home/Home';

const Stack = createStackNavigator();

interface Props {
  theme: ThemeType;
}

const Router: React.FC<Props> = (props) => {
  const {theme} = props;

  const navigationTheme = {
    ...(theme.dark ? DarkTheme : LightTheme),
    dark: theme.dark,
    colors: {
      ...(theme.dark ? DarkTheme.colors : LightTheme.colors),

      background: theme.colors.background,
      primary: theme.colors.primary,
      card: theme.colors.surface,
    },
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default withTheme(Router);
