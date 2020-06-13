import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  overflow: hidden;
  border-bottom: ${({ theme }) => theme.black} solid 3px;
`;

export default Wrapper;
