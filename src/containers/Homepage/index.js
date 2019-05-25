// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import PageWrapper from 'layout/UI/PageWrapper';
import Logo from 'components/SVG/Logos/DenmaHorizontal';

const Homepage = () => (
  <StyledPageWrapper>
    <HeroWrapper>
      <StyledLogo />
    </HeroWrapper>
  </StyledPageWrapper>
);

const StyledPageWrapper = styled(PageWrapper)`
  color: ${props => props.theme.whiteColor};
  background-color: ${props => props.theme.lightDarkColor}
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 64px);
  display: flex;
  align-items: center;
  justify-content: center;
`;


const StyledLogo = styled(Logo)`
  margin: 0 auto;
  width: 70%;
  height: 100%;
`;

export default Homepage;
