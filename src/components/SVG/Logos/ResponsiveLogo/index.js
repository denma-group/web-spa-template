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
  const [width, setWidth] = useState(window.innerWidth);

  const onResizeHandler = useCallback(() => setWidth(window.innerWidth), [setWidth]);

  const { screenXl } = theme;
  const widthBreakpoint = useMemo(() => Number(String(screenXl).replace('px', '')), [screenXl]);

  return useMemo(() => (
    <React.Fragment>
      <ReactResizeDetector
        handleHeight
        handleWidth
        onResize={onResizeHandler}
      />
      {width >= widthBreakpoint ? (
        <HorizontalLogo {...rest} />
      ) : (
        <VerticalLogo {...rest} />
      )}
    </React.Fragment>
  ), [width, widthBreakpoint, onResizeHandler, rest]);
};

ResponsiveLogo.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired
};

export default withTheme(ResponsiveLogo);
