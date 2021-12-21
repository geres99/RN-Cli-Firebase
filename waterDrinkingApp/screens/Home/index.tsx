import { IconFood } from 'assets/svg/icons';
import React from 'react';
import { Button } from 'react-native';
import Typography from 'components/atoms/Typography';
import StyledView from 'components/styles/StyledView/styles';
import ScreenContentWrapper from 'components/molecules/ScreenContentWrapper';
import useHomeScreen from './hooks';
import { HomeScreenNavigationProp } from './types';

const HomeScreen: React.FC<HomeScreenNavigationProp> = () => {
  const { onLogoutPress } = useHomeScreen();

  return (
    <ScreenContentWrapper>
      <StyledView pt={20}>
        <Typography>Hello World!</Typography>
        <IconFood fill='blue' height={60} width={60} />
      </StyledView>
      <StyledView flex={1} flexDirection='column-reverse'>
        <Button title='LogOut' onPress={onLogoutPress} />
      </StyledView>
    </ScreenContentWrapper>
  );
};

export default HomeScreen;
