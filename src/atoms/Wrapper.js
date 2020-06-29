import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  border-bottom: ${({ theme }) => theme.black} solid 3px;
`;

export default Wrapper;
