import React from 'react';
import styled from 'styled-components';

import P from '../atoms/P';
import A from '../atoms/A';

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

const StyledA = styled(A)`
  font-size: ${({ theme }) => theme.fontSize.s};
  width: 100%;
  flex-basis: 100%;
  text-align: center;
  margin: 10px 0;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledP>Made by Kacper | kacperkuczewski@yahoo.pl</StyledP>
      <StyledA
        href="https://www.linkedin.com/in/kacper-kuczewski/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </StyledA>
      <StyledA href="https://github.com/superkacper4" target="_blank" rel="noopener noreferrer">
        GitHub
      </StyledA>
      <StyledP>all right reserved</StyledP>
    </StyledFooter>
  );
};

export default Footer;
