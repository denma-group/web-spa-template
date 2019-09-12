import React, { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const FadeScaleIn = memo(({ children, style, ...rest }) => {
  // state
  const [loaded, setLoaded] = useState(false);
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
  });

  if (inView) {
    setTimeout(() => setLoaded(true), 250);
  }

  return (
    <Container style={{ ...style }} ref={ref} animate={loaded} {...rest}>
      {children}
    </Container>
  );
});

const Container = styled.div`
  opacity: ${({ animate }) => (animate ? 1 : 0)};
  transform: ${({ animate }) => (animate ? 'scale(1)' : 'scale(0.8)')};
  transition: ${({ time }) => `opacity ${time}s, transform ${time}s`};
  transition-delay: ${({ delay }) => `${delay}s`};
  ${({ css }) => css};
`;

FadeScaleIn.defaultProps = {
  css: {},
  delay: 0,
  time: 1,
  style: {},
};

FadeScaleIn.propTypes = {
  delay: PropTypes.number,
  children: PropTypes.node.isRequired,
  css: PropTypes.instanceOf(Object),
  time: PropTypes.number,
  style: PropTypes.instanceOf(Object),
};

export default FadeScaleIn;
