import React, { useState } from 'react';
import styled from 'styled-components';
import H3 from '../atoms/H3';
import Button from '../atoms/Button';

const StyledProjectTile = styled.div`
  height: 300px;
  width: 300px;
  background-color: #acd1cf;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  border: ${({ theme }) => theme.black} solid 2px;

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
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <StyledProjectTile onClick={handleClick}>
      <H3>{name}</H3>
      <StyledProjectTileActive active={active}>
        {description}
        <Button />
      </StyledProjectTileActive>
    </StyledProjectTile>
  );
};

export default ProjectTile;
