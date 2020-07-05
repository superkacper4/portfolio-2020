import React from 'react';
import styled from 'styled-components';

import { breakpoints } from '../theme/breakpoints';

const StyledNavBar = styled.button`
  width: 50px;
  height: 20px;
  border: none;
  position: fixed;
  top: 5%;
  right: 5%;
  z-index: 10;
  background-color: transparent;

  @media ${breakpoints.laptop} {
    cursor: pointer;
  }

  &::before {
    content: '';
    width: 100%;
    height: 8px;
    background-color: ${({ active, theme }) => (active ? theme.red : theme.black)};
    position: absolute;
    top: 0;
    left: 0;
    transform: ${({ active }) =>
      active ? 'rotate(45deg) translateY(8px)' : 'rotate(0) translateY(0)'};
    transition: transform 1s, background-color 0.5s;

    @media ${breakpoints.laptop} {
      &:hover {
        background-color: ${({ theme }) => theme.gray};
      }
    }
  }

  &::after {
    content: '';
    width: 100%;
    height: 8px;
    background-color: ${({ active, theme }) => (active ? theme.red : theme.black)};
    position: absolute;
    bottom: 0;
    left: 0;
    transform: ${({ active }) =>
      active ? 'rotate(-45deg) translateY(-8px)' : 'rotate(0) translateY(0)'};
    transition: transform 1s, background-color 0.5s;

    @media ${breakpoints.laptop} {
      &:hover {
        background-color: ${({ theme }) => theme.gray};
      }
    }
  }
`;

const NavBar = ({ active, setActive }) => {
  return <StyledNavBar onClick={() => setActive(!active)} active={active} />;
};

export default NavBar;
