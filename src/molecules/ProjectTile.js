import React, { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../theme/breakpoints';
import H3 from '../atoms/H3';
import A from '../atoms/A';
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
  padding: 5px;
  border: ${({ theme }) => theme.black} solid 2px;
  transition: transform 1.5s, opacity 1.5s;

  @media ${breakpoints.tablet} {
    height: 55vw;
    width: 55vw;
  }

  @media ${breakpoints.laptop} {
    width: 40vw;
    height: 40vw;
    cursor: pointer;
  }

  @media ${breakpoints.laptopL} {
    width: 20vw;
    height: 20vw;
  }
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

const ProjectTile = ({ name, description, url }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <StyledProjectTile onClick={handleClick}>
      <H3>{name}</H3>
      <StyledProjectTileActive active={active}>
        {description}
        <Button>
          <A href={url} target="_blank" rel="noopener noreferrer">
            Odwiedź
          </A>
        </Button>
      </StyledProjectTileActive>
    </StyledProjectTile>
  );
};

export default ProjectTile;
