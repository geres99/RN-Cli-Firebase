import { createContext, useContext } from 'react';
import noop from 'lodash/noop';
import { UserContextValues } from './types';

export const UserContext = createContext<UserContextValues>({
  isLoggedIn: false,
  setIsLoggedIn: noop,
});

export const UserContextProvider = UserContext.Provider;
export const useUserContext = (): UserContextValues => useContext(UserContext);
