import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './setup/navigation';
import Toast from 'react-native-toast-message';
import UserContextWrapper from 'contexts/userContext/UserContextWrapper';
import ThemeWrapper from 'theme/ThemeContextWrapper';

export default function App() {
  return (
    <ThemeWrapper>
      <UserContextWrapper>
        <NavigationContainer>
          <MainNavigation />
          <Toast />
        </NavigationContainer>
      </UserContextWrapper>
    </ThemeWrapper>
  );
}
