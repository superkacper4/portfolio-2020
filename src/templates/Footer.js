import React from 'react';
import styled from 'styled-components';

import P from '../atoms/P';

const StyledFooter = styled.footer`
  width: 100%;
  padding: 10px;
  margin: 0;
  background-color: ${({ theme }) => theme.lightBlue};
  display: flex;
  flex-wrap: wrap;
`;

const StyledP = styled(P)`
  font-size: ${({ theme }) => theme.fontSize.s};
  width: 100%;
  flex-basis: 100%;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledP>Made by Kacper | kucza06@wp.pl</StyledP>
      <StyledP>LinkedIn: jksdaflkf.xd</StyledP>
      <StyledP>GitHub: jksdaflkf.xd</StyledP>
      <StyledP>all right reserved</StyledP>
    </StyledFooter>
  );
};

export default Footer;
