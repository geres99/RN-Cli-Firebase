import React, { useState, useEffect } from 'react';
import { getAsyncStorageItem } from 'setup/asyncStorage';
import { UserContextProvider } from './index';

const UserContextWrapper: React.FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getLoginData = async () => {
      const loginData = await getAsyncStorageItem('isLoggedIn');
      setIsLoggedIn(JSON.parse(loginData));
    };

    getLoginData();
  }, []);

  return (
    <UserContextProvider
      value={{
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </UserContextProvider>
  );
};

export default UserContextWrapper;
