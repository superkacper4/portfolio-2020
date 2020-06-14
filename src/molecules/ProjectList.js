import React from 'react';
import styled from 'styled-components';

const StyledProjectList = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ProjectList = ({ children }) => {
  return <StyledProjectList>{children}</StyledProjectList>;
};

export default ProjectList;
