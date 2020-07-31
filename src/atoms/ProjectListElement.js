import React from 'react';
import styled from 'styled-components';

import { breakpoints } from '../theme/breakpoints';
import A from './A';

const StyledListElement = styled.li`
  height: 100px;
  width: 100%;
  background-color: ${({ theme }) => theme.whiteBlue};
  border-bottom: solid 1px ${({ theme }) => theme.black};
  font-size: ${({ theme }) => theme.fontSize.m};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 1.5s, transform 1.5s;

  @media ${breakpoints.laptop} {
    cursor: pointer;
    transition: background-color 0.5s;

    &:hover {
      background-color: ${({ theme }) => theme.darkBlue};
    }
  }

  @media ${breakpoints.laptopL} {
    height: 70px;
  }
`;

const ProjectListElement = ({ name, url }) => {
  return (
    <StyledListElement>
      <A href={url} target="_blank" rel="noopener noreferrer">
        {name}
      </A>
    </StyledListElement>
  );
};

export default ProjectListElement;
