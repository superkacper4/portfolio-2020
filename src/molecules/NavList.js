import React from 'react';
import styled from 'styled-components';

const StyledNavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  /* justify-content: center;
  align-content: center;
  align-items: center; */
  flex-direction: column;
`;

const NavList = ({ children }) => {
  return <StyledNavList>{children}</StyledNavList>;
};

export default NavList;
