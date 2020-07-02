import styled from 'styled-components';

const A = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default A;
