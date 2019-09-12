// Libraries
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

// Dependencies
import { mainTheme } from 'static/theme';

const defaultColor = mainTheme.whiteColor;
const defaultBackgroundColor = mainTheme.lightDarkColor;
const defaultOpacity = 1;
const defaultBoxShadow = undefined;
const defaultTransform = undefined;
const defaultPosition = 'fixed';
const defaultCss = undefined;

const initialContext = {
  colorState: [defaultColor, undefined],
  backgroundColorState: [defaultBackgroundColor, undefined],
  opacityState: [defaultOpacity, undefined],
  boxShadowState: [defaultBoxShadow, undefined],
  transformState: [defaultTransform, undefined],
  positionState: [defaultPosition, undefined],
  cssState: [defaultCss, undefined],
};

export const NavbarContext = React.createContext(initialContext);

const NavbarThemeProvider = props => {
  const {
    color,
    backgroundColor,
    opacity,
    boxShadow,
    transform,
    potition,
    css,
    theme,
    children
  } = props;

	const [fontColor, setFontColor] = useState(color || theme.brandLightBlack);
	const [navBackground, setNavBackground] = useState(backgroundColor || 'transparent');
  const [navOpacity, setNavOpacity] = useState(opacity || defaultOpacity);
  const [navBoxShadow, setNavBoxShadow] = useState(boxShadow || defaultBoxShadow);
  const [navTransform, setNavTransform] = useState(transform || defaultTransform);
  const [navPosition, setNavPosition] = useState(potition || defaultPosition);

  /**
   * navCss refers to the styled-components `css` export
   */
  const [navCss, setNavCss] = useState(css || defaultCss);

  /**
   * Resets the navbar CSS state variables back to normal.
   */
  const resetCss = () => {
    setFontColor(defaultColor);
    setNavBackground(defaultBackgroundColor);
    setNavOpacity(defaultOpacity);
    setNavBoxShadow(defaultTransform);
    setNavTransform(defaultPosition);
    setNavPosition(defaultCss);
  };

	return (
    <NavbarContext.Provider
      value={{
        colorState: [fontColor, setFontColor],
        backgroundColorState: [navBackground, setNavBackground],
        opacityState: [navOpacity, setNavOpacity],
        boxShadowState: [navBoxShadow, setNavBoxShadow],
        transformState: [navTransform, setNavTransform],
        positionState: [navPosition, setNavPosition],
        cssState: [navCss, setNavCss],
        resetCss
      }}
    >
      {children}
    </NavbarContext.Provider>
	);
};

NavbarThemeProvider.propTypes = {
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  boxShadow: PropTypes.string,
  transform: PropTypes.string,
  potition: PropTypes.string,
  css: PropTypes.instanceOf(Object),
  theme: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.node.isRequired
};

NavbarThemeProvider.defaultProps = {
  color: defaultColor,
  backgroundColor: defaultBackgroundColor,
  opacity: defaultOpacity,
  boxShadow: defaultBoxShadow,
  transform: defaultTransform,
  potition: defaultPosition,
  css: defaultCss
};

export default withTheme(NavbarThemeProvider);
