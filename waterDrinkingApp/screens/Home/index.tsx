import React from 'react';
import { Button } from 'react-native';
import StyledView from 'components/styles/StyledView/styles';
import ScreenContentWrapper from 'components/molecules/ScreenContentWrapper';
import useHomeScreen from './hooks';
import { HomeScreenNavigationProp } from './types';
import WaterBar from 'components/molecules/WaterBar';
import NumericInput from 'react-native-numeric-input';

const HomeScreen: React.FC<HomeScreenNavigationProp> = () => {
  const { onLogoutPress, addWater, inputValue, setInputValue } =
    useHomeScreen();

  return (
    <ScreenContentWrapper>
      <StyledView pt={40} flex={1} alignItems='center'>
        <WaterBar />
        <Button title='Add Water Drunk' onPress={addWater} />
        <NumericInput
          type='up-down'
          value={inputValue}
          onChange={(value) => setInputValue(value)}
        />
        <StyledView flex={1} flexDirection='column-reverse'>
          <Button title='LogOut' onPress={onLogoutPress} />
        </StyledView>
      </StyledView>
    </ScreenContentWrapper>
  );
};

export default HomeScreen;
