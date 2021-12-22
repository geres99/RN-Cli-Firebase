import { useUserContext } from 'contexts/userContext';
import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const useWaterBar = () => {
  const animHeight = useRef(new Animated.Value(0)).current;
  const {
    waterAmount: { value },
  } = useUserContext();

  useEffect(() => {
    Animated.timing(animHeight, {
      toValue: value >= 2000 ? 398 : Math.floor(value / 5),
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, [value]);

  return { animHeight };
};

export default useWaterBar;
