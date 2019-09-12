// Libraries
import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

// Dependencies
import { useTranslateContent } from 'utils/hooks/useTranslateContext';
import elementPageOffset from 'utils/elementPageOffset';

// TODO: check mobile
const Parallax = props => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  // multiplierY defines how fast or slow we translate our elements
  const { multiplierY, style, children } = props;
  const [rect, setRect] = useState({});

  const divRef = useRef(null);

  const { translateYVal } = useTranslateContent(multiplierY, rect, isReady);

  useEffect(() => {
    if (divRef && divRef.current && isReady) {
      const { pageTop, height } = elementPageOffset(divRef.current);
      // rect object has the Y position and height of the component.
      setRect({ startingY: pageTop, componentHeight: height });
    }
  }, [divRef, isReady]);

  // Do not render component until the body's height has been set
  if (!isReady || !rect) return null;

  return (
    <Container
      ref={divRef}
      style={{
        ...style,
        transform: `translateY(${translateYVal}px)`,
      }}
    >
      {children}
    </Container>
  );
};

Parallax.propTypes = {
  multiplierY: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.instanceOf(Object),
};

Parallax.defaultProps = {
  style: {},
};

const popFadeIn = keyframes`
  0% {
    opacity: 0;
  }
  30%{
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Container = styled.div`
  animation: ${popFadeIn} ease 250ms;
`;

export default Parallax;
