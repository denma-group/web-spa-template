// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// Components
import InfinityLoader from './Loaders/InfinityLoader';
import EclipseLoader from './Loaders/EclipseLoader';

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
  const { size, loader, ...rest } = props;

  return (
    <Container {...rest}>
      {loader === 'eclipse' ? (
        <EclipseLoader
          size={size}
        />
      ) : (
        <InfinityLoader
          size={size}
        />
      )}
    </Container>
  );
};

Loader.propTypes = {
  size: PropTypes.number,
  loader: PropTypes.string
};

Loader.defaultProps = {
  size: 96,
  loader: 'eclipse'
};

export default Loader;
