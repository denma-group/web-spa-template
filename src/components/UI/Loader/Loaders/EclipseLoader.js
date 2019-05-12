// Libraries
import React from 'react';
import PropTypes from 'prop-types';

const InfinityLoader = props => (
  <svg
    width={`${props.size}px`}
    height={`${props.size}px`}
    viewBox="0 0 100 100"
  >
    <path
      ng-attr-d="{{config.pathCmd}}"
      ng-attr-fill="{{config.color}}"
      stroke="none"
      d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
      fill="currentColor"
      transform="rotate(182.785 50 51)"
    >
    <animateTransform
      attributeName="transform"
      type="rotate"
      calcMode="linear"
      values="0 50 51;360 50 51"
      keyTimes="0;1"
      dur="1.5s"
      begin="0s"
      repeatCount="indefinite"
    />
    </path>
  </svg>
);

InfinityLoader.propTypes = {
  size: PropTypes.number
};

InfinityLoader.defaultProps = {
  size: 96
};

export default InfinityLoader;
