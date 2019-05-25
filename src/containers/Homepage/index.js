// Libraries
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';

// Dependencies
import { useOnScrollBgColor } from 'utils/hooks/useOnScrollBgColor';

// Components
import { NavbarContext } from 'layout/UI/Navbar';
import PageWrapper from 'layout/UI/PageWrapper';
import Logo from 'components/SVG/Logos/DenmaHorizontal';

const Homepage = props => {
  const { theme } = props;
  const navbarContext = useContext(NavbarContext);
  const setCss = navbarContext.cssState[1];

  /**
   * Background color brackets.
   */
  const totalScreenHeight = window.innerHeight;
  const BRACKET_1_HEIGHT = totalScreenHeight * 0;
  const BRACKET_2_HEIGHT = totalScreenHeight * 0.25;
  const BRACKET_3_HEIGHT = totalScreenHeight * 0.5;
  const BRACKET_4_HEIGHT = totalScreenHeight * 0.75;
  const BRACKET_5_HEIGHT = totalScreenHeight * 1;
  const BRACKET_6_HEIGHT = totalScreenHeight * 1.25;

  const handleOnScrollBgColor = ({
    mixRatio,
    bracket,
  }) => {
    const lowerBracketHeight = bracket[1][0];
    switch (true) {
      case lowerBracketHeight <= BRACKET_2_HEIGHT:
         // Partially hide Navbar
        setCss(css`
          opacity: ${1 - mixRatio};
          color: ${theme.whiteColor};
          background-color: transparent;
          box-shadow: none;
        `);
        break;
      case lowerBracketHeight <= BRACKET_3_HEIGHT:
        // Hide Navbar
        setCss(css`
          opacity: ${0};
          color: ${theme.whiteColor};
          background-color: transparent;
          box-shadow: none;
        `);
        break;
      case lowerBracketHeight <= BRACKET_4_HEIGHT:
        // Begin changing colors
        setCss(css`
          opacity: ${0};
          color: ${theme.brandLightBlack};
          background-color: transparent;
          box-shadow: none;
        `);
        break;
      case lowerBracketHeight >= BRACKET_6_HEIGHT:
        // Show Navbar
        setCss(css`
          opacity: ${mixRatio};
          color: ${theme.brandLightBlack};
          background-color: ${theme.whiteColor};
          box-shadow: ${theme.navbarBoxShadow};
        `);
        break;
      default:
        // Do nothing.
    }
  };
  const backgroundColor = useOnScrollBgColor(
    [
      [BRACKET_1_HEIGHT, theme.lightDarkColor],
      [BRACKET_2_HEIGHT, theme.brandLogoRed],
      [BRACKET_3_HEIGHT, theme.brandLogoRed],
      [BRACKET_4_HEIGHT, theme.brandRed],
      [BRACKET_5_HEIGHT, theme.brandOrange],
      [BRACKET_6_HEIGHT, theme.brandWhite],
    ],
    {
      callback: handleOnScrollBgColor
    }
  );

  document.body.style.backgroundColor = backgroundColor;

  return (
    <StyledPageWrapper
      backgroundColor={backgroundColor}
    >
      <HeroWrapper>
        <StyledLogo />
      </HeroWrapper>
      <div style={{ minHeight: 3 * totalScreenHeight }}>
        <div style={{ minHeight: totalScreenHeight }} />
        <div style={{ minHeight: totalScreenHeight }} />
        <div style={{ minHeight: totalScreenHeight }} />
      </div>
    </StyledPageWrapper>
  );
};

Homepage.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired
};

const StyledPageWrapper = styled(PageWrapper)`
  color: ${props => props.theme.lightDarkColor};
  background-color: ${props => props.backgroundColor || props.theme.lightDarkColor};
  transition: all ease 200ms;
`;

const HeroWrapper = styled.div`
  color: ${props => props.theme.whiteColor};
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

export default withTheme(Homepage);
