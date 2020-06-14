import React, { useState, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';

const StyledListElement = styled.li`
  height: 10vh;
  width: 100%;
  background-color: ${({ theme }) => theme.whiteBlue};
  border-bottom: solid 1px ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.fontSize.m};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ active }) => (active ? '1' : '0')};
  transform: ${({ active }) => (active ? 'translateY(0)' : 'translateY(-20px)')};
  transition: opacity 1.5s, transform 1.5s;
`;

const ProjectListElement = ({ name }) => {
  const [active, setActive] = useState(false);

  const ourRef = useRef(null);

  useLayoutEffect(() => {
    const topPosition = ourRef.current.offsetTop + ourRef.current.offsetHeight - window.innerHeight;

    const onScroll = () => {
      const scrollVal = window.scrollY;
      if (scrollVal > topPosition) {
        console.log('XDD');
        setActive(true);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <StyledListElement ref={ourRef} active={active}>
      {name}
    </StyledListElement>
  );
};

export default ProjectListElement;
