import styled from 'styled-components';

const H1 = styled.h1`
  padding: 0;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: center;
  z-index: 2;
`;

export default H1;
