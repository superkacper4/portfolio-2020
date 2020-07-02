import styled from 'styled-components';
import { breakpoints } from '../theme/breakpoints';

const H1 = styled.h1`
  padding: 0;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: center;
  z-index: 2;

  @media ${breakpoints.laptop}{
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  /* @media ${breakpoints.laptopL}{
    font-size: ${({ theme }) => theme.fontSize.xl * 3};
  } */
`;

export default H1;
