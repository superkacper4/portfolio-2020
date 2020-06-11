import styled from 'styled-components';

const P = styled.p`
  padding: 0;
  margin: 10px 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: justify;
  line-height: normal;
`;

export default P;
