// Libraries
import React, { useState, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

// Components
import HeroSlider, {
  Slide,
  Nav
} from 'hero-slider';

import Servify from './Slides/Servify';
import BonpreuFoods from './Slides/BonpreuFoods';
import TireOutlet from './Slides/TireOutlet';

export const ActiveSlideThemeContext = React.createContext({
  activeSlideTheme: undefined
});

/**
 * The active slide `theme` will be passed to the background
 * attached divider component to set the bottom gradient's color
 * equal to the active slide's color.
 */
export const ActiveSlideThemeProvider = withTheme(props => {
  const { children, theme } = props;
  const [activeSlideTheme, setActiveSlideTheme] = useState(theme.servify);
  return useMemo(() => (
    <ActiveSlideThemeContext.Provider
      value={{
        activeSlideTheme,
        setActiveSlideTheme
      }}
    >
      {children}
    </ActiveSlideThemeContext.Provider>
  ), [activeSlideTheme, setActiveSlideTheme, children]);
});

const Slider = props => {
  const { theme } = props;
  const { setActiveSlideTheme } = useContext(ActiveSlideThemeContext);

  const onChangeHandler = nextSlide => {
    switch (nextSlide) {
      case 1:
        return setActiveSlideTheme(theme.servify);
      case 2:
        return setActiveSlideTheme(theme.bonpreuFoods);
      case 3:
        return setActiveSlideTheme(theme.tireOutlet);
      default: // Do nothing
    }
  };

  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      settings={props.settings}
      onChange={onChangeHandler}
    >
      {props.children}
      {/* SERVIFY */}
      <Slide
        background={{
          shouldLazyLoad: false,
          backgroundColor: theme.servify
        }}
      >
        <Servify />
      </Slide>
      {/* BONPREU? */}
      <Slide
        background={{
          shouldLazyLoad: false,
          backgroundColor: theme.bonpreuFoods
        }}
      >
        <BonpreuFoods />
      </Slide>
      {/* TIRE OUTLETS */}
      <Slide
        background={{
          shouldLazyLoad: false,
          backgroundColor: theme.tireOutlet
        }}
      >
        <TireOutlet />
      </Slide>
      <Nav />
    </HeroSlider>
  );
};

Slider.propTypes = {
  settings: PropTypes.instanceOf(Object).isRequired,
  theme: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.node
};

Slider.defaultProps = {
  children: null
};

export default withTheme(Slider);
