import styled from 'styled-components/native';
import { StyledTypographyProps } from './types';

const StyledText = styled.Text<StyledTypographyProps>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  font-family: ${({ fontFamily }) => fontFamily};
  color: ${({ theme }) => theme.colors.dark};
`;

export default StyledText;
