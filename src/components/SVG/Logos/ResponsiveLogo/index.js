// Libraries
import React, { useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import ReactResizeDetector from 'react-resize-detector';
import { withTheme } from 'styled-components';

// Components
import HorizontalLogo from '../DenmaHorizontal';
import VerticalLogo from '../DenmaVertical';

const ResponsiveLogo = props => {
  const { theme, ...rest } = props;
  const [width, setWidth] = useState();

  const onResizeHandler = useCallback(windowWidth => setWidth(windowWidth || window.innerWidth), [setWidth]);

  const { screenXl } = theme;
  const widthBreakpoint = useMemo(() => Number(String(screenXl).replace('px', '')), [screenXl]);

  return useMemo(() => (
    <React.Fragment>
      <ReactResizeDetector
        handleHeight
        handleWidth
        onResize={onResizeHandler}
      />
      {width < widthBreakpoint ? (
        <VerticalLogo {...rest} />
      ) : (
        <HorizontalLogo {...rest} />
      )}
    </React.Fragment>
  ), [width, widthBreakpoint, onResizeHandler, rest]);
};

ResponsiveLogo.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired
};

export default withTheme(ResponsiveLogo);
