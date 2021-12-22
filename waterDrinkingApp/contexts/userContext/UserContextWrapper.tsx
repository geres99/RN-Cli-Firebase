import { noop } from 'lodash';
import React, { useState, useEffect } from 'react';
import PushNotification from 'react-native-push-notification';
import { getAsyncStorageItem } from 'setup/asyncStorage';
import { UserContextProvider } from './index';
import { isToday } from 'date-fns';

const UserContextWrapper: React.FC = ({ children }) => {
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [areNotificationsScheduled, setAreNotificationsScheduled] =
    useState(false);
  const [waterAmount, setWaterAmount] = useState({
    value: 0,
    date: new Date(Date.now()),
  });

  const createChannels = () => {
    PushNotification.createChannel(
      {
        channelId: 'waterReminder',
        channelName: 'waterReminder',
      },
      noop
    );
  };

  useEffect(() => {
    const getData = async () => {
      const loginData = await getAsyncStorageItem('isLoggedIn');
      const notificationData = await getAsyncStorageItem(
        'areNotificationsScheduled'
      );
      const waterData = await getAsyncStorageItem('waterAmount');
      setIsLoggedIn(JSON.parse(loginData));
      setAreNotificationsScheduled(JSON.parse(notificationData));
      if (isToday(new Date(JSON.parse(waterData).date)))
        setWaterAmount(JSON.parse(waterData));
      setIsAppLoading(false);
    };

    getData();
    createChannels();
  }, []);

  return (
    <UserContextProvider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        isAppLoading,
        setIsAppLoading,
        areNotificationsScheduled,
        setAreNotificationsScheduled,
        waterAmount,
        setWaterAmount,
      }}
    >
      {children}
    </UserContextProvider>
  );
};

export default UserContextWrapper;
