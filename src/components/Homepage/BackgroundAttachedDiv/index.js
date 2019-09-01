// Libraries
import React, { useContext } from 'react';
import styled from 'styled-components';

// Dependencies
import image from 'static/images/homepage/background-attachment-divider.jpg';

// Components
import Typography from '@material-ui/core/Typography';

import { ActiveSlideThemeContext } from '../HeroSlider';

const BackgroundAttachedDiv = () => {
  const { activeSlideTheme } = useContext(ActiveSlideThemeContext);

  return (
    <Wrapper>
      <Overlay
        activeSlideTheme={activeSlideTheme}
      />
      <Text>
        <StyledHeader align="center">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </StyledHeader>
      </Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${image});
  background-attachment: fixed;
  background-position: center center;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, ${({ theme, activeSlideTheme }) => activeSlideTheme || theme.servify} 0%, ${({ theme }) => theme.primary} 100%);
  opacity: 0.65;
`;

const Text = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled(Typography)`
  &&& {
    font-size: 54px;
    line-height: 64px;
    margin-bottom: 1em;
    font-weight: 700;
    color: ${props => props.theme.whiteColor};

    @media (max-width: ${({ theme }) => theme.screenMd}) {
      font-size: 48px;
      line-height: 58px;
      margin-bottom: 1.25em;
    }

    @media (max-width: ${({ theme }) => theme.screenSm}) {
      font-size: 36px;
      line-height: 52px;
    }

    @media (max-width: ${({ theme }) => theme.screenXs}) {
      font-size: 28px;
      line-height: 36px;
    }
  }
`;

export default BackgroundAttachedDiv;
