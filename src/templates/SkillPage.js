import React from 'react';
import styled from 'styled-components';

import Wrapper from '../atoms/Wrapper';
import P from '../atoms/P';
import H2 from '../atoms/H2';
import H3 from '../atoms/H3';

import SkillTile from '../molecules/SkillTile';

const StyledWrapper = styled(Wrapper)`
  background-color: ${({ theme }) => theme.darkBlue};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 10px;
`;

const skills = [
  {
    key: 0,
    name: 'HTML',
    description: 'Staram się pisać poprawny semantycznie kod',
  },
  {
    key: 1,
    name: 'CSS',
    description: 'Znam flex-box, animacje i ogólnie sobie radzę.',
  },
  {
    key: 2,
    name: 'JavaScript',
    description: 'Znam JS na tyle dobrze, że daję radę w React, umiem oczywiście więcej.......',
  },
  {
    key: 3,
    name: 'React',
    description: 'Moja zdecydowanie ulubiona technologia Front-endowa, znam hooki.',
  },
];

const SkillPage = () => {
  return (
    <StyledWrapper id="skill-page">
      <H2>Skills</H2>
      {/* <P>Piszę w tym i tym pbaljadkjfljfk</P> */}
      {skills.map((skill) => (
        <SkillTile key={skill.key}>
          <H3>{skill.name}</H3>
          <P>{skill.description}</P>
        </SkillTile>
      ))}
    </StyledWrapper>
  );
};

export default SkillPage;
