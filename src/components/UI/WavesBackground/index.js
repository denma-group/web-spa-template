// Libraries
import React from 'react';
import PropTypes from 'prop-types';

// Dependencies
import getRandomColor from 'utils/getRandomColor';

// CSS
import './WavesBackground.css';

function setCSSVars({ wavesOpacity }) {
  const randomNumber = Math.ceil(Math.random() * 10);
  return {
    '--top-background-color': getRandomColor(2.5),
    '--bottom-background-color': getRandomColor(2.5),
    '--waves-opacity': wavesOpacity || 1,
    '--animation-duration': `${randomNumber + 7.5}s`
  };
}

export default function WavesBackground(props) {
  const {
    children,
    className,
    wavesOpacity,
    style,
  } = props;
  const cssVars = setCSSVars({ wavesOpacity });

  return (
    <div
      // CSS Vars, faster performance than styled-components for this particular case.
      style={{
        ...cssVars,
        ...style
      }}
      className={[
        'rm-waves-wrapper',
        className
      ].join(' ')}
    >
      <div className="rm-waves-top-wave" />
      {children}
      <div className="rm-waves-bottom-wave" />
    </div>
  );
}

WavesBackground.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  wavesOpacity: PropTypes.number,
  style: PropTypes.instanceOf(Object),
};

WavesBackground.defaultProps = {
  children: undefined,
  className: undefined,
  wavesOpacity: undefined,
  style: undefined,
};
