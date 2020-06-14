import React, { useLayoutEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
  padding: 0;
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  text-align: center;
  opacity: ${({ active }) => (active ? '1' : '0')};
  transform: ${({ active }) => (active ? 'translateY(0)' : 'translateY(-20px)')};
  transition: opacity 1.5s, transform 1.5s;
`;

const H2 = ({ children }) => {
  const [active, setActive] = useState(false);

  const ourRef = useRef(null);

  useLayoutEffect(() => {
    const topPosition = ourRef.current.offsetTop + ourRef.current.offsetHeight - window.innerHeight;

    const onScroll = () => {
      const scrollVal = window.scrollY;
      if (scrollVal > topPosition) {
        setActive(true);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <StyledH2 active={active} ref={ourRef}>
      {children}
    </StyledH2>
  );
};

export default H2;
