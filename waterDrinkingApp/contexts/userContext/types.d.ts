import { Dispatch, SetStateAction } from 'react';

export interface WaterAmountProps {
  value: number;
  date: Date;
}

export interface UserContextValues {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  isAppLoading: boolean;
  setIsAppLoading: Dispatch<SetStateAction<boolean>>;
  areNotificationsScheduled: boolean;
  setAreNotificationsScheduled: Dispatch<SetStateAction<boolean>>;
  waterAmount: WaterAmountProps;
  setWaterAmount: Dispatch<SetStateAction<WaterAmountProps>>;
}
