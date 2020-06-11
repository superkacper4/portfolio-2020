import React from 'react';
import styled from 'styled-components';

import Wrapper from '../atoms/Wrapper';
import H2 from '../atoms/H2';
import P from '../atoms/P';
import Img from '../atoms/Img';

import Me from '../assets/ja.jpg';

const StyledWrapper = styled(Wrapper)`
  padding: 0 10px;
  background-color: ${({ theme }) => theme.whiteBlue};
`;

const AboutPage = () => {
  return (
    <StyledWrapper>
      <H2>About</H2>
      <Img src={Me} />
      <P>
        Interesuję się Front-endem od około czterech lat i od tamtej pory rozwijam się w tej
        dziedzinie. Rozpoczęcie studiów na Politechnice Warszawskiej pozwala mi na rozwinięcie
        umiejętności oraz zdobycie specjalistycznej wiedzy. W wolnych chwilach realizuję projekty,
        które mnie rozwijają i stawiają przede mną nowe wyzwania. Przez ostatnie pół roku robiłem z
        kolegą grę na Android, niestety nie jest ona jeszcze ukończona, ale jest już na finiszu.
        Ostatnio rozpocząłem też pracę nad prostą platformą e-learningową, jednak nie jest jeszcze
        ona w pełni responsywna, więc nie jest również ukończona. Preferuję pracę w React.
      </P>
    </StyledWrapper>
  );
};

export default AboutPage;
