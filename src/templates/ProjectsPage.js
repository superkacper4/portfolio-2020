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

const projectsImportant = [
  {
    key: 0,
    name: 'Witcher website',
    description: 'Strona wykonana przy użyciu React i SCSS, opowiadająca troszkę o Wiedźminach.',
    url: 'https://github.com/superkacper4/witcher-story-website',
  },
  {
    key: 1,
    name: 'Clicker',
    description:
      'Prosta gra typu kliker z podstawowymi funkcjami, wykonana w React i Styled-components',
    url: 'https://github.com/superkacper4/clicker',
  },
  {
    key: 2,
    name: 'Estne',
    description:
      'Strona dla mojego Taty, nie korzystałem przy jej tworzeniu z React, tylko HTML, CSS i JS.',
    url: 'https://github.com/superkacper4/estne-website',
  },
  {
    key: 3,
    name: 'E-learn',
    description:
      'Platforma edukacyjna umożliwiająca użytkownikowi naukę podzieloną na działy i wykonanie na koniec testu.',
    url: 'https://github.com/superkacper4/e-learn',
  },
  {
    key: 4,
    name: 'Rap-gra',
    description: 'Gra w React-Native - w trakcie realizacji. Stay calm.',
    url: 'https://github.com/superkacper4/rap-gra',
  },
  {
    key: 5,
    name: 'Windows',
    description: 'Prosty odpowiednik Winodws w przeglądarce. Użyty React i Styled-components.',
    url: 'https://github.com/superkacper4/windows',
  },
];

const projectsLess = [
  {
    key: 0,
    name: 'Bee Name generator',
    url: 'https://github.com/superkacper4/bee-name-generator-react',
  },
  {
    key: 1,
    name: 'One-page website',
    url: 'https://github.com/superkacper4/one-page-website',
  },
  {
    key: 2,
    name: 'Zbiór prac',
    url: 'https://github.com/superkacper4/portfolio-react',
  },
  {
    key: 3,
    name: 'Bussines page',
    url: 'https://github.com/superkacper4/Business-page',
  },
  {
    key: 4,
    name: 'NASA picture of day',
    url: 'https://github.com/superkacper4/nasa-pic-of-day',
  },
  {
    key: 5,
    name: 'Simple Redux cart',
    url: 'https://github.com/superkacper4/redux-and-test',
  },
  {
    key: 6,
    name: '2018 portfolio',
    url: 'https://github.com/superkacper4/portfolio',
  },
  {
    key: 7,
    name: 'TODO lista ;)',
    url: 'https://github.com/superkacper4/ToDoList',
  },
];

const ProjectsPage = () => {
  return (
    <StyledWrapper id="project-page">
      <H2>Projects</H2>
      {projectsImportant.map((project) => (
        <ProjectTile
          key={project.key}
          name={project.name}
          description={project.description}
          url={project.url}
        />
      ))}
      <H3>...Projects</H3>
      <ProjectList>
        {projectsLess.map((project) => (
          <ProjectListElement
            key={project.key}
            name={project.name}
            description={project.description}
            url={project.url}
          />
        ))}
      </ProjectList>
    </StyledWrapper>
  );
};

export default ProjectsPage;
