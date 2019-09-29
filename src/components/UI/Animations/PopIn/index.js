
// Libraries
import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

// Components
import { CSSTransition } from 'react-transition-group';

// Dependencies
import useElementInViewport from '../utils/useElementInViewport';

const ANIMATION_TIMEOUT = 1000;
const POP_IN_DEFAULT_CLASS = 'pop-in';

const PopIn = props => {
  const {
    // Functionality
    wrapper: WrapperComponent,
    shouldPopOutOnExit = false,
    animationMultiplier = 1,
    animationDelayMultiplier = 1,
    // CSSTransition props
    animationTimeout = ANIMATION_TIMEOUT,
    classNames = POP_IN_DEFAULT_CLASS,
    onEnter,
    onExited,
    unmountOnExit = false,
    // Children MUST be one wrapper element at most
    style,
    children,
    className,
    ...rest
  } = props;
  const [ref, firstInView, inView] = useElementInViewport();

  const delay = animationTimeout * 0.33 * animationMultiplier * animationDelayMultiplier;
  const duration = animationTimeout * 0.66 * animationMultiplier;

  // A custom `Component` can be passed as a prop to use as a wrapper
  // Otherwise we fall back to a div
  const Wrapper = useMemo(() => (
    (WrapperComponent ? styled(WrapperComponent) : styled.div)`
      ${popInCss(duration, delay, classNames)}
    `
  ), [WrapperComponent, duration, delay, classNames]);

  return (
    <Wrapper
      {...rest}
      style={{
        ...style,
        opacity: !firstInView && 0,
      }}
      className={className}
      ref={ref}
    >
      <CSSTransition
        in={shouldPopOutOnExit ? inView : firstInView}
        timeout={duration + delay}
        classNames={classNames}
        onEnter={onEnter}
        onExited={onExited}
        unmountOnExit={unmountOnExit}
      >
        <>
          {children}
        </>
      </CSSTransition>
    </Wrapper>
  );
};

PopIn.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.instanceOf(Object),
  className: PropTypes.string,
  wrapper: PropTypes.func,
  shouldPopOutOnExit: PropTypes.bool,
  animationMultiplier: PropTypes.number,
  animationDelayMultiplier: PropTypes.number,
  animationTimeout: PropTypes.number,
  classNames: PropTypes.string,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  unmountOnExit: PropTypes.bool,
};

PopIn.defaultProps = {
  style: undefined,
  wrapper: undefined,
  className: undefined,
  shouldPopOutOnExit: undefined,
  animationMultiplier: undefined,
  animationDelayMultiplier: undefined,
  animationTimeout: undefined,
  classNames: undefined,
  onEnter: undefined,
  onExited: undefined,
  unmountOnExit: undefined,
};

const popInCss = (duration, delay, classNames) => css`
  &&& {
    .${classNames}-enter {
      opacity: 0;
      transform: scale(0.95);
    }
    .${classNames}-enter-active {
      opacity: 1;
      transform: scale(1);
      transition: opacity ${duration}ms, transform ${duration}ms;
      transition-delay: ${delay}ms;
    }
    .${classNames}-exit {
      opacity: 1;
      transform: scale(1);
    }
    .${classNames}-exit-active {
      opacity: 0;
      transform: scale(0.95);
      transition: opacity ${duration}ms, transform ${duration}ms;
      transition-delay: ${delay}ms;
    }
  }
`;

export default PopIn;
