import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { breakpoints } from '../theme/breakpoints';

const StyledNavListElement = styled(Link)`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.l};
  margin: 20px 0;
  z-index: 5;

  @media ${breakpoints.lapotop} {
    cursor: pointer;
    transition: color 0.5s;

    &:hover {
      color: ${({ theme }) => theme.gray};
    }
  }
`;

const NavListElement = ({ children, link, setActive }) => {
  return (
    <StyledNavListElement to={link} onClick={() => setActive(false)}>
      {children}
    </StyledNavListElement>
  );
};

export default NavListElement;
