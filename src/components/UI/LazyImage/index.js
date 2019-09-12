// Libraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import LazyLoad from 'react-lazyload';

const StyledImage = styled.img`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || ''};
  object-fit: ${props => props.objectFit || 'contain'};
  max-height: 100%;
  &.loading {
    opacity: 0;
    visibility: hidden;
  }
  &.loaded {
    opacity: 0;
    visibility: visible;
    animation: fade-in 200ms ease-in-out 0ms forwards;
  }
  @keyframes fade-in {
    0% {
      opacity: 0
    }
    100% {
      opacity: 1;
    }
  }
`;

class LazyImage extends Component {
  static propTypes = {
    src: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onLoad: PropTypes.func,
    className: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    objectFit: PropTypes.string,
    offset: PropTypes.number,
    alt: PropTypes.string,
    draggable: PropTypes.bool
  }

  static defaultProps = {
    onLoad: undefined,
    className: undefined,
    draggable: undefined,
    width: undefined,
    height: undefined,
    objectFit: undefined,
    offset: 0,
    src: undefined,
    alt: undefined
  }

  state = {
    className: 'loading'
  }

  onLoadHandler = event => {
    const { onLoad } = this.props;
    if (onLoad) {
      onLoad(event);
    }
    this.setState({ className: 'loaded' });
  }

  render() {
    const {
      offset,
      className,
      width,
      height,
      objectFit,
      alt,
      src,
      draggable
    } = this.props;

    const lazyImageStyleProps = {
      width,
      height,
      objectFit
    };

    return (
      <LazyLoad
        offset={offset}
        debounce={false}
        height={height || '100%'}
      >
        <StyledImage
          style={lazyImageStyleProps}
          className={[
            className,
            this.state.className
          ].join(' ')}
          onLoad={this.onLoadHandler}
          alt={alt}
          src={src}
          draggable={draggable}
        />
      </LazyLoad>
    );
  }
}

export default LazyImage;
