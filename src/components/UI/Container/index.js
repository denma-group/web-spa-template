// Libraries
import styled from 'styled-components';

const Container = styled.div`
  padding: 48px;
  position: relative;
  @media (max-width: ${({ theme }) => theme.screenMd}) {
    padding: 28px 36px;
  }
`;

export default Container;
