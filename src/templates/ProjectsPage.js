import React from 'react';
import styled from 'styled-components';

import Wrapper from '../atoms/Wrapper';
import H2 from '../atoms/H2';
import H3 from '../atoms/H3';
import ProjectTile from '../molecules/ProjectTile';
import ProjectList from '../molecules/ProjectList';
import ProjectListElement from '../atoms/ProjectListElement';

const StyledWrapper = styled(Wrapper)`
  background-color: ${({ theme }) => theme.blue};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const projects = [
  {
    key: 0,
    name: 'Witcher website',
    description:
      'Jakaś dłuższa opis tego projekut tutaj jakby nie bylo jest bardzo milo bal bla bla dlutie',
  },
  {
    key: 1,
    name: 'Bee Clicker',
    description:
      'Jakaś dłuższa opis tego projekut tutaj jakby nie bylo jest bardzo milo bal bla bla dlutie',
  },
  {
    key: 2,
    name: 'Windows',
    description:
      'Jakaś dłuższa opis tego projekut tutaj jakby nie bylo jest bardzo milo bal bla bla dlutie',
  },
  {
    key: 3,
    name: 'Windows',
    description:
      'Jakaś dłuższa opis tego projekut tutaj jakby nie bylo jest bardzo milo bal bla bla dlutie',
  },
  {
    key: 4,
    name: 'Windows',
    description:
      'Jakaś dłuższa opis tego projekut tutaj jakby nie bylo jest bardzo milo bal bla bla dlutie',
  },
];

const ProjectsPage = () => {
  return (
    <StyledWrapper>
      <H2>Projects</H2>
      {projects.map((project) => (
        <ProjectTile key={project.key} name={project.name} description={project.description} />
      ))}
      <H3>...Projects</H3>
      <ProjectList>
        {projects.map((project) => (
          <ProjectListElement
            key={project.key}
            name={project.name}
            description={project.description}
          />
        ))}
      </ProjectList>
    </StyledWrapper>
  );
};

export default ProjectsPage;
