// Libraries
import React, { useContext, useState, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';

// Dependencies
import { useOnScrollBgColor } from 'utils/hooks/useOnScrollBgColor';

// Components
import ReactResizeDetector from 'react-resize-detector';
import { NavbarContext } from 'layout/UI/Navbar';
import { Parallax } from 'components/UI';
import HeroSlider, { ActiveSlideThemeProvider } from 'components/Homepage/HeroSlider';
import HelpYourBusiness from 'components/Homepage/HelpYourBusiness';
import BackgroundAttachedDiv from 'components/Homepage/BackgroundAttachedDiv';
import SubscribeForm from 'components/Homepage/SubscribeForm';

// Icons
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

// Styled Components
import {
  StyledPageWrapper,
  HeroWrapper,
  LogoContainer,
  StyledLogo,
  StyledHeroValueProposition
} from './components';

const Homepage = (props) => {
  const { theme } = props;
  const navbarContext = useContext(NavbarContext);
  const setNavbarCss = navbarContext.cssState[1];

  const [totalScreenHeight, setTotalScrenHeight] = useState(window.innerHeight);

  /**
   * Background color brackets.
   */
  const BRACKET_1_HEIGHT = totalScreenHeight * 0;
  const BRACKET_2_HEIGHT = totalScreenHeight * 0.25;
  const BRACKET_3_HEIGHT = totalScreenHeight * 0.5;
  const BRACKET_4_HEIGHT = totalScreenHeight * 0.75;
  const BRACKET_5_HEIGHT = totalScreenHeight * 1;
  const BRACKET_6_HEIGHT = totalScreenHeight * 1.25;

  const handleOnScrollBgColor = ({ currentScrollHeight }) => {
    const totalScrollRatio = Number(currentScrollHeight / BRACKET_5_HEIGHT).toFixed(2);
    const opacityRatio = 1 - totalScrollRatio <= 0 ? 0 : Number(1 - totalScrollRatio).toFixed(2);
    /**
     * Navbar handlers.
     */
    switch (true) {
      case currentScrollHeight <= BRACKET_2_HEIGHT:
        // Show Navbar
        setNavbarCss(css`
          opacity: ${opacityRatio};
          color: ${theme.whiteColor};
          background-color: transparent;
        `);
        break;
      case currentScrollHeight <= BRACKET_3_HEIGHT:
        // Partially hide Navbar
        setNavbarCss(css`
          opacity: ${opacityRatio};
          color: ${theme.whiteColor};
          background-color: transparent;
          box-shadow: none;
        `);
        break;
      case currentScrollHeight <= BRACKET_4_HEIGHT:
        // Hide Navbar
        setNavbarCss(css`
          opacity: ${0};
          color: ${theme.whiteColor};
          background-color: transparent;
          box-shadow: none;
        `);
        break;
      case currentScrollHeight >= BRACKET_5_HEIGHT:
      default:
        // Show Navbar
        setNavbarCss(css`
          opacity: ${1 - opacityRatio};
          color: ${theme.brandLightBlack};
          background-color: ${theme.whiteColor};
        `);
        break;
    }
  };

  useOnScrollBgColor(
    [
      [BRACKET_1_HEIGHT, theme.darkColor],
      [BRACKET_2_HEIGHT, theme.lightDarkColor],
      [BRACKET_3_HEIGHT, theme.brandLogoRed],
      [BRACKET_4_HEIGHT, theme.brandRed],
      [BRACKET_5_HEIGHT, theme.brandOrange],
      [BRACKET_6_HEIGHT, theme.brandWhite]
    ],
    {
      callback: handleOnScrollBgColor,
      throttleLimit: 20,
    }
  );

  const arrowDownOnClickHandler = () => {
    if (valuePropositionRef && valuePropositionRef.current) {
      valuePropositionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
    });
    }
  };

  const valuePropositionRef = useRef(undefined);

  return useMemo(() => (
    <ActiveSlideThemeProvider>
      <StyledPageWrapper>
        <ReactResizeDetector
          handleWidth
          handleHeight
          onResize={() => setTotalScrenHeight(window.innerHeight)}
        />
        <HeroWrapper>
          <Container
            height={totalScreenHeight - 64}
          >
            <Parallax speed={0.5}>
              <LogoContainer>
                <StyledLogo />
                <ArrowDownwardIcon
                  onClick={arrowDownOnClickHandler}
                  className="scroll-down"
                />
              </LogoContainer>
            </Parallax>
          </Container>
        </HeroWrapper>
        <Container
          height={totalScreenHeight}
          styledCss={
            css`
              display: flex;
              align-items: center;
              justify-content: flex-start;
              text-align: left;
              max-width: 1200px;
              margin: 100px auto 0;
              padding: 0 40px;
              background-color: transparent;
            `}
          ref={valuePropositionRef}
        >
          <StyledHeroValueProposition variant="h1">
            For companies who find themselves in need of <span>high-quality</span> software applications, <span>Denma</span> is a software development studio that provides personalized services with a solid methodology to <span>help</span> companies take their businesses to the <span>next level</span>.
          </StyledHeroValueProposition>
        </Container>
        {/* LINKS */}
        <Container
          height={totalScreenHeight}
        >
          <HelpYourBusiness />
        </Container>
        {/* DIVIDER */}
        <Container
          height={totalScreenHeight * 0.5}
        >
          <BackgroundAttachedDiv />
        </Container>
        {/* HERO-SLIDER */}
        <Container
          height={0.9 * (totalScreenHeight - 64)}
        >
          <HeroSlider
            settings={{
              slidingDuration: 250,
              slidingDelay: 100,
              shouldAutoplay: false,
              shouldDisplayButtons: true,
              autoplayDuration: 20000,
              height: 0.9 * (totalScreenHeight - 64),
              color: '#FFF'
            }}
          />
        </Container>
        {/* SUBSCRIBE TO US FORM */}
        <Container
          height="auto"
        >
          <SubscribeForm />
        </Container>
      </StyledPageWrapper>
    </ActiveSlideThemeProvider>
  ), [totalScreenHeight, valuePropositionRef]);
};

const Container = styled.div`
  position: relative;
  height: ${props => props.height || window.innerHeight}px;
  ${({ styledCss }) => styledCss};
`;

Homepage.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired
};

export default withTheme(Homepage);
