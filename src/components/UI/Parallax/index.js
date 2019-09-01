// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Plx from 'react-plx';

// An array of parallax effects to be applied - see below for detail
const parallaxData = [
  {
    start: 100,
    end: 400,
    properties: [
      {
        startValue: 0,
        endValue: -300,
        property: 'translateY'
      },
    ],
  },
];

const Parallax = props => {
  const { children } = props;
  return (
    <StyledPlx
      parallaxData={parallaxData}
      style={{
        height: '100%'
      }}
    >
      {children}
    </StyledPlx>
  );
};

Parallax.propTypes = {
  children: PropTypes.node.isRequired
};

const StyledPlx = styled(Plx)`
  position: absolute;
  width: 100%;
  top: 5vh;
  left: 0;
  will-change: transform;
  transform-style: preserve-3d;
`;

export default Parallax;
