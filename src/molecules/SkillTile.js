import React, { useState, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';

const StyledProjectTile = styled.div`
  min-height: 50vw;
  width: 90vw;
  background-color: #acd1cf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px 0;
  opacity: ${({ active }) => (active ? '1' : '0')};
  transform: ${({ active }) => (active ? 'translateY(0)' : 'translateX(-10px)')};
  transition: transform 1.5s, opacity 1.5s;
`;

const SkillTile = ({ children }) => {
  const [active, setActive] = useState(false);

  const ourRef = useRef(null);

  useLayoutEffect(() => {
    const topPosition = ourRef.current.getBoundingClientRect().top + ourRef.current.offsetHeight;

    const onScroll = () => {
      const scrollVal = window.scrollY + window.innerHeight / 4;
      if (scrollVal > topPosition) {
        setActive(true);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <StyledProjectTile ref={ourRef} active={active}>
      {children}
    </StyledProjectTile>
  );
};

export default SkillTile;
