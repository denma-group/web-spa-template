// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const LoaderColor = css`${props => props.theme.primary || 'inherit'}`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${LoaderColor};
  svg {
    color: ${LoaderColor};
  }
`;

const Loader = props => {
  const { size } = props;

  return (
    <Container>
      <svg
        width={`${size}px`}
        height={`${size}px`}
        viewBox="0 0 100 100"
      >
        <path
          fill="none"
          d="M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40 C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z"
          stroke="currentColor"
          strokeWidth="7"
          strokeDasharray="159.08513549804687 97.50379272460938"
        >
          <animate
            attributeName="stroke-dashoffset"
            calcMode="linear"
            values="0;256.58892822265625"
            keyTimes="0;1"
            dur="1"
            begin="0s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </Container>
  );
};

Loader.propTypes = {
  size: PropTypes.number
};

Loader.defaultProps = {
  size: 96
};

export default Loader;
