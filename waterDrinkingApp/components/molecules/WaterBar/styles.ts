import styled from 'styled-components/native';

export const StyledWaterBarWrapper = styled.View`
  height: 400px;
  width: 60px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 6px;
  border-color: ${({ theme }) => theme.colors.dark};
  border-width: 1px;
`;

export const StyledWaterBarContent = styled.View`
  position: absolute;
  bottom: 0px;
  width: 58px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.lightInfo};
`;

export const StyledWaterBarTextWrapper = styled.View`
  position: absolute;
  top: 0px;
`;
