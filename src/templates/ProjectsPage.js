import React from 'react';
import styled from 'styled-components';

import Wrapper from '../atoms/Wrapper';
import H2 from '../atoms/H2';
import ProjectTile from '../molecules/ProjectTile';

const StyledWrapper = styled(Wrapper)`
  padding: 0 10px;
  background-color: ${({ theme }) => theme.blue};
`;

const projects = [
  {
    name: 'Witcher website',
    description:
      'Jakaś dłuższa opis tego projekut tutaj jakby nie bylo jest bardzo milo bal bla bla dlutie',
  },
  {
    name: 'Bee Clicker',
    description:
      'Jakaś dłuższa opis tego projekut tutaj jakby nie bylo jest bardzo milo bal bla bla dlutie',
  },
  {
    name: 'Windows',
    description:
      'Jakaś dłuższa opis tego projekut tutaj jakby nie bylo jest bardzo milo bal bla bla dlutie',
  },
];

const AboutPage = () => {
  return (
    <StyledWrapper>
      <H2>Projects</H2>
      {projects.map((project) => (
        <ProjectTile name={project.name} description={project.description} />
      ))}
    </StyledWrapper>
  );
};

export default AboutPage;
