import styled from 'styled-components';
import { breakpoints } from '../theme/breakpoints';

const Img = styled.img`
  width: 100%;
  padding: 0;
  margin: 0;
  border: 1px solid black;

  @media ${breakpoints.tablet} {
    width: 50vw;
  }

  @media ${breakpoints.laptop} {
    width: auto;
    height: 50vw;
  }

  @media ${breakpoints.laptopL} {
    height: 30vw;
  }
`;

export default Img;
