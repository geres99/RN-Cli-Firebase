import { useEffect, useState } from 'react';
import SuccessToast from 'react-native-toast-message';
import { saveToStorage } from 'utils';
import { useNavigation } from '@react-navigation/native';
import { HomeScreenNavigationProp } from './types';
import { ScreenNames } from 'setup/navigation/enums';
import PushNotification from 'react-native-push-notification';
import { useUserContext } from 'contexts/userContext';

const useHomeScreen = () => {
  const [inputValue, setInputValue] = useState(0);
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { areNotificationsScheduled, setAreNotificationsScheduled } =
    useUserContext();
  const {
    waterAmount: { value },
    setWaterAmount,
  } = useUserContext();

  const handleNotification = () => {
    PushNotification.localNotificationSchedule({
      channelId: 'waterReminder',
      title: 'Its time!',
      message: 'To drink some water ;)',
      date: new Date(Date.now() + 60 * 1000),
      repeatType: 'hour',
      repeatTime: 2,
      allowWhileIdle: true,
    });
  };

  const onLogoutPress = async () => {
    saveToStorage('isLoggedIn', false);
    navigation.navigate(ScreenNames.Login);
    SuccessToast.show({
      type: 'success',
      text1: 'Success',
      text2: 'You have successfully logged out',
    });
  };

  useEffect(() => {
    if (!areNotificationsScheduled) {
      handleNotification();
      setAreNotificationsScheduled(true);
      saveToStorage('areNotificationsScheduled', true);
      console.log(areNotificationsScheduled, 'Welcome to my house');
    }
  }, []);

  const addWater = () => {
    saveToStorage('waterAmount', {
      value: inputValue + value,
      date: new Date(Date.now()),
    });
    setWaterAmount({
      value: inputValue + value,
      date: new Date(Date.now()),
    });
  };

  return {
    onLogoutPress,
    addWater,
    inputValue,
    setInputValue,
  };
};

export default useHomeScreen;
