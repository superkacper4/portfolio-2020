import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 150px;
  margin: 10px;
  padding: 5px;
  background-color: white;
  border: ${({ theme }) => theme.black} solid 2px;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const Button = ({ children }) => {
  return (
    <StyledButton onClick={() => window.open('https://example.com/', '_blank')}>
      {children}
    </StyledButton>
  );
};

export default Button;
