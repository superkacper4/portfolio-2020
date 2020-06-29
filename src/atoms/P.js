import styled from 'styled-components';
import { breakpoints } from '../theme/breakpoints';

const P = styled.p`
  padding: 0;
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: center;
  line-height: normal;

  @media ${breakpoints.tablet} {
    width: 80%;
  }

  @media ${breakpoints.laptop} {
    width: 60%;
  }
`;

export default P;
