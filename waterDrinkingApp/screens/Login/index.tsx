import Input from 'components/atoms/Input';
import Typography from 'components/atoms/Typography';
import ScreenContentWrapper from 'components/molecules/ScreenContentWrapper';
import StyledView from 'components/styles/StyledView/styles';
import React from 'react';
import { Button } from 'react-native';
import useLoginScreen from './hooks';
import { LoginScreenNavigationProp } from './types';

const LoginScreen: React.FC<LoginScreenNavigationProp> = () => {
  const {
    usernameInput,
    setUsernameInput,
    passwordInput,
    setPasswordInput,
    onLoginPress,
  } = useLoginScreen();

  return (
    <ScreenContentWrapper areItemsCentered>
      <StyledView flexDirection='row' justifyContent='center'>
        <Typography variant='h1'>Water App</Typography>
      </StyledView>
      <StyledView pb={2}>
        <Input
          placeholder='username'
          value={usernameInput}
          onChangeText={(value) => setUsernameInput(value)}
        />
      </StyledView>
      <Input
        placeholder='password'
        value={passwordInput}
        onChangeText={(value) => setPasswordInput(value)}
        secureTextEntry
      />
      <Button title='Login' onPress={onLoginPress} />
    </ScreenContentWrapper>
  );
};

export default LoginScreen;
