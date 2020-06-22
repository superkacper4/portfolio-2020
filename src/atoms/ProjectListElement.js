import React, { useState, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';

const StyledListElement = styled.li`
  height: 100px;
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
    <StyledListElement ref={ourRef} active={active}>
      {name}
    </StyledListElement>
  );
};

export default ProjectListElement;
