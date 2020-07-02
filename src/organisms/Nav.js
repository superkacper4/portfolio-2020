import React, { useState } from 'react';
import styled from 'styled-components';

import { breakpoints } from '../theme/breakpoints';

import NavBar from '../molecules/NavBar';
import NavList from '../molecules/NavList';
import NavListElement from '../atoms/NavListElement';

const StyledNav = styled.nav`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.blue};
  left: 0;
  top: 0;
  position: fixed;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  transform: ${({ active }) => (active ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 1s;

  @media ${breakpoints.laptop} {
    width: 50vw;
    transform: ${({ active }) => (active ? 'translateX(100%)' : 'translateX(200%)')};
  }
`;

const StyledCoolDiv = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 90vh 0 0 110vw;
  border-color: transparent transparent transparent ${({ theme }) => theme.darkBlue};
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Nav = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <NavBar active={active} setActive={setActive} />
      <StyledNav active={active}>
        <StyledCoolDiv />
        <NavList>
          <NavListElement link="/#about-page" setActive={setActive}>
            About
          </NavListElement>
          <NavListElement link="/#project-page" setActive={setActive}>
            Projekty
          </NavListElement>
          <NavListElement link="/#skill-page" setActive={setActive}>
            Skill
          </NavListElement>
        </NavList>
      </StyledNav>
    </>
  );
};

export default Nav;
