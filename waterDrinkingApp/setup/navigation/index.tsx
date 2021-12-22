import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'screens/Home';
import LoginScreen from 'screens/Login';
import { ScreenNames } from './enums';
import { useUserContext } from 'contexts/userContext';
import { LogBox } from 'react-native';

const MainNavigation = () => {
  const Stack = createNativeStackNavigator();
  const { isLoggedIn, isAppLoading } = useUserContext();
  LogBox.ignoreLogs(['AsyncStorage has been extracted from react-native core']);

  return !isAppLoading ? (
    <Stack.Navigator
      initialRouteName={isLoggedIn ? ScreenNames.Home : ScreenNames.Login}
    >
      <Stack.Screen
        name={ScreenNames.Home}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ScreenNames.Login}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  ) : null;
};

export default MainNavigation;
