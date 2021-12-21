import React from 'react';
import StyledView from 'components/styles/StyledView/styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyledScreenContentWrapper } from './styles';
import { ScreenContentWrapperProps } from './types';

const ScreenContentWrapper: React.FC<ScreenContentWrapperProps> = ({
  areItemsCentered,
  children,
}) => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <StyledScreenContentWrapper
      {...{ areItemsCentered }}
      testID='ScreenContentWrapper'
    >
      <StyledView
        justifyContent={areItemsCentered ? 'center' : undefined}
        flex={1}
        pt={top}
        pb={bottom}
      >
        {children}
      </StyledView>
    </StyledScreenContentWrapper>
  );
};

export default ScreenContentWrapper;
