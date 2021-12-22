import React from 'react';
import useWaterBar from './hooks';
import {
  StyledWaterBarContent,
  StyledWaterBarTextWrapper,
  StyledWaterBarWrapper,
} from './styles';
import { Animated } from 'react-native';
import StyledView from 'components/styles/StyledView/styles';
import Typography from 'components/atoms/Typography';

const WaterBar: React.FC = () => {
  const { animHeight } = useWaterBar();

  return (
    <StyledView flexDirection='row'>
      <StyledWaterBarWrapper testID='waterBar'>
        <StyledView alignItems='center'>
          <StyledWaterBarTextWrapper>
            <Typography>2000ml</Typography>
          </StyledWaterBarTextWrapper>
        </StyledView>
        <StyledWaterBarContent
          as={Animated.View}
          style={{ height: animHeight }}
        />
      </StyledWaterBarWrapper>
    </StyledView>
  );
};

export default WaterBar;
