import React from 'react';
import styled from 'styled-components';

const StyledProjectTile = styled.div`
  background-color: #acd1cf;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  transition: transform 1.5s, opacity 1.5s;
`;

const SkillTile = ({ children }) => {
  return <StyledProjectTile>{children}</StyledProjectTile>;
};

export default SkillTile;
