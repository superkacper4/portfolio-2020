import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../theme/breakpoints';

import Wrapper from '../atoms/Wrapper';
import H2 from '../atoms/H2';
import P from '../atoms/P';
import Img from '../atoms/Img';

import Me from '../assets/ja.jpg';

const StyledWrapper = styled(Wrapper)`
  padding: 0 10px 30px 10px;
  background-color: ${({ theme }) => theme.whiteBlue};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledP = styled(P)`
  text-align: justify;

  @media ${breakpoints.laptop} {
    display: flex;
    align-items: center;
    align-content: center;
    height: 50vw;
    margin: 0 0 0 10px;
  }

  @media ${breakpoints.laptopL} {
    width: 40vw;
    margin: 0 0 0 40px;
    height: 30vw;
  }
`;

const AboutPage = () => {
  return (
    <StyledWrapper id="about-page">
      <H2>About</H2>
      <Img src={Me} />
      <StyledP>
        Interesuję się Front-endem od około czterech lat i od tamtej pory rozwijam się w tej
        dziedzinie. W 2019 rozpocząłem studia na Politechnice Warszawskiej na kierunku Informatyka
        Przemysłowa na wydziale Mechatroniki. W wolnych chwilach realizuję projekty, które mnie
        rozwijają i stawiają przede mną nowe wyzwania. Staram się zdobywać nowe umiejętności w
        każdym kolejnym projekcie. Preferuję pracę w React ze Styled-components z zastosowaniem
        Atomic-desing.
      </StyledP>
    </StyledWrapper>
  );
};

export default AboutPage;
