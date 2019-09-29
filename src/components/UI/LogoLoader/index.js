// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// Components
import Logo from './LogoNoSpacing';

const LoaderColor = css`${props => props.theme.primary || 'inherit'}`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${LoaderColor};
  overflow: hidden;

  svg {
    max-width: ${({ theme }) => theme.screenXs};
    color: ${LoaderColor};
    animation-direction:normal;
    animation-play-state:running;
    animation-duration:1.5s;
  }

  svg g {
    transform-origin: 50px 50px;
  }

  .jump {
    transform-origin: 50px 50px;
    animation: jump 1.5s ease-in infinite;
  }

  .pulse {
    animation: pulse 1.5s infinite;
  }

  @keyframes jump {
    0%, 28%, 48%, 64%, 76%, 86%, 93%, 100% {
        animation-timing-function: ease-out;
        transform: translateY(0);
    }
    14%, 38%, 56%, 70%, 81%, 90%, 97% {
      animation-timing-function: ease-in;
    }
    14% {
      transform: translateY(-27px);
    }
    38% {
      transform: translateY(-20px);
    }
    56% {
      transform: translateY(-16px);
    }
    70% {
      transform: translateY(-12px);
    }
    81% {
      transform: translateY(-7.5px);
    }
    90% {
      transform: translateY(-3px);
    }
    97% {
      transform: translateY(-1.5px);
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(.96);
    }

    50% {
      transform: scale(1.03);
    }
  }
`;

const Loader = props => {
  const { size, ...rest } = props;

  return (
    <Container {...rest}>
      <Logo />
    </Container>
  );
};

Loader.propTypes = {
  size: PropTypes.number
};

Loader.defaultProps = {
  size: 124
};

export default Loader;
