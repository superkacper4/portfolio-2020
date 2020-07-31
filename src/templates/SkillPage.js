import React from 'react';
import styled from 'styled-components';

import { breakpoints } from '../theme/breakpoints';
import Wrapper from '../atoms/Wrapper';
import H2 from '../atoms/H2';
import H3 from '../atoms/H3';

import SkillTile from '../molecules/SkillTile';

const StyledWrapper = styled(Wrapper)`
  background-color: ${({ theme }) => theme.darkBlue};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 10px;

  @media ${breakpoints.laptop} {
    padding: 50px 300px;
  }
`;

const skills = [
  {
    key: 0,
    name: 'HTML',
  },
  {
    key: 1,
    name: 'CSS',
  },
  {
    key: 2,
    name: 'JavaScript',
  },
  {
    key: 3,
    name: 'React',
  },
  {
    key: 4,
    name: 'Node.js',
  },
  {
    key: 5,
    name: 'ESLint',
  },
  {
    key: 6,
    name: 'Git i Github',
  },
  {
    key: 7,
    name: 'SCSS',
  },
  {
    key: 8,
    name: 'styled-components',
  },
  {
    key: 9,
    name: 'React-Native',
  },
  {
    key: 10,
    name: 'Gatsby',
  },
  {
    key: 11,
    name: 'MongoDB',
  },
];

const SkillPage = () => {
  return (
    <StyledWrapper id="skill-page">
      <H2>Skill</H2>
      {/* <P>Piszę w tym i tym pbaljadkjfljfk</P> */}
      {skills.map((skill) => (
        <SkillTile key={skill.key}>
          <H3>{skill.name}</H3>
        </SkillTile>
      ))}
    </StyledWrapper>
  );
};

export default SkillPage;
