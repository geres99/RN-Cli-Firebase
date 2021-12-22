import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'firebaseconfig/index';
import ErrorToast from 'react-native-toast-message';
import { saveToStorage } from 'utils';
import { ScreenNames } from 'setup/navigation/enums';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProp } from './types';

const useLoginScreen = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const onLoginPress = async () => {
    try {
      await signInWithEmailAndPassword(auth, usernameInput, passwordInput);
      saveToStorage('isLoggedIn', true);
      navigation?.navigate(ScreenNames.Home);
    } catch (error) {
      ErrorToast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Failed to log-in',
      });
      console.log(error);
    }
  };

  return {
    usernameInput,
    setUsernameInput,
    passwordInput,
    setPasswordInput,
    onLoginPress,
  };
};

export default useLoginScreen;
