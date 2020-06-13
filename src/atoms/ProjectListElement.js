import React from 'react';
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
`;

const ProjectListElement = ({ name }) => {
  return <StyledListElement>{name}</StyledListElement>;
};

export default ProjectListElement;
