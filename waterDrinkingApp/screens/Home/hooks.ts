import SuccessToast from 'react-native-toast-message';
import { saveToStorage } from 'utils';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from './types';
import { ScreenNames } from 'setup/navigation/enums';

const useHomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const onLogoutPress = async () => {
    saveToStorage('isLoggedIn', false);
    navigation.navigate(ScreenNames.Login);
    SuccessToast.show({
      type: 'success',
      text1: 'Success',
      text2: 'You have successfully logged out',
    });
  };

  return {
    onLogoutPress,
  };
};

export default useHomeScreen;
