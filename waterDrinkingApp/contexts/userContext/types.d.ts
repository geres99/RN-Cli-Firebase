import { Dispatch, SetStateAction } from 'react';

export interface UserContextValues {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}
