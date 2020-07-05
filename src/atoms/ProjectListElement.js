import React, { useState, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';

import { breakpoints } from '../theme/breakpoints';
import A from './A';

const StyledListElement = styled.li`
  height: 100px;
  width: 100%;
  background-color: ${({ theme }) => theme.whiteBlue};
  border-bottom: solid 1px ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.fontSize.m};
  display: flex;
  justify-content: center;
  align-items: center;
  /* opacity: ${({ active }) => (active ? '1' : '0')};
  transform: ${({ active }) => (active ? 'translateY(0)' : 'translateY(-20px)')}; */
  transition: opacity 1.5s, transform 1.5s;

  @media ${breakpoints.laptop}{
    cursor: pointer;
    transition: background-color 0.5s;

    &:hover{
      background-color: ${({ theme }) => theme.darkBlue};
    }
  }

  @media ${breakpoints.laptopL} {
    height: 70px;
  }
`;

const ProjectListElement = ({ name, url }) => {
  const [active, setActive] = useState(false);

  const ourRef = useRef(null);

  useLayoutEffect(() => {
    // const topPosition = ourRef.current.offsetTop + ourRef.current.offsetHeight;
    const topPosition = ourRef.current.getBoundingClientRect().top + ourRef.current.offsetHeight;

    const onScroll = () => {
      // const scrollVal = window.scrollY + window.innerHeight;
      const scrollVal = window.scrollY + window.innerHeight / 3;
      console.log(topPosition);
      console.log(scrollVal);
      if (scrollVal > topPosition) {
        setActive(true);
        // setTimeout(() => { setActive(true); }, 1000);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <StyledListElement
      ref={ourRef}
      active={active}
      data-sal="slide-up"
      data-sal-delay="300"
      data-sal-easing="ease"
    >
      <A href={url} target="_blank" rel="noopener noreferrer">
        {name}
      </A>
    </StyledListElement>
  );
};

export default ProjectListElement;
