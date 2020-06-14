import React, { useState, useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import H3 from '../atoms/H3';
import Button from '../atoms/Button';

const StyledProjectTile = styled.div`
  height: 90vw;
  width: 90vw;
  background-color: #acd1cf;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px 10px 10px;
  border: ${({ theme }) => theme.black} solid 2px;
  opacity: ${({ animate }) => (animate ? '1' : '0')};
  transform: ${({ animate }) => (animate ? 'translateY(0)' : 'translateY(-10px)')};
  transition: transform 1.5s, opacity 1.5s;

  /* &:hover{

        &:before{
            transform: translateY(-100%);
    }

    }

    &:before{
        content:'Jakaś dłuższa opis tego projekut tutaj jakby nie bylo jest bardzo milo bal bla bla dlutie';
    } */
`;

const StyledProjectTileActive = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(185, 222, 220, 0.9);
  position: absolute;
  top: 100%;
  left: 0;
  padding: 5px;
  transition: transform 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: justify;
  transform: ${({ active }) => (active ? 'translateY(-100%)' : 'translateY(0)')};
`;

const ProjectTile = ({ name, description }) => {
  const [active, setActive] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const ourRef = useRef(null);

  useLayoutEffect(() => {
    const topPosition = ourRef.current.offsetTop + ourRef.current.offsetHeight - window.innerHeight;

    const onScroll = () => {
      const scrollVal = window.scrollY;
      if (scrollVal > topPosition) {
        setAnimate(true);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <StyledProjectTile ref={ourRef} onClick={handleClick} animate={animate}>
      <H3>{name}</H3>
      <StyledProjectTileActive active={active}>
        {description}
        <Button />
      </StyledProjectTileActive>
    </StyledProjectTile>
  );
};

export default ProjectTile;
