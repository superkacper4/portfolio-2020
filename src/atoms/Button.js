import React from 'react';
import styled from 'styled-components';

import { breakpoints } from '../theme/breakpoints';

const StyledButton = styled.button`
  width: 150px;
  margin: 10px;
  padding: 5px;
  background-color: white;
  border: ${({ theme }) => theme.black} solid 2px;
  font-size: ${({ theme }) => theme.fontSize.m};

  @media ${breakpoints.laptop} {
    cursor: pointer;
    transition: background-color 0.5s;

    &:hover {
      background-color: ${({ theme }) => theme.darkBlue};
    }
  }
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
