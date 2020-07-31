import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  padding: 0;
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
  width: 100%;
  transition: opacity 1.5s, transform 1.5s;
`;

const H2 = ({ children }) => {
  return <StyledH2>{children}</StyledH2>;
};

export default H2;
