import styled from 'styled-components';

const BoxWrapper = styled.div`
  position: relative;
  pointer-events: auto;
  background-color: #fff;
  border-radius: 16px;
  margin: 16px;
  padding: 16px 0px;
  max-width: ${({ theme }) => theme.breakpoints.md}px;
`;

export default BoxWrapper;
