// Libraries
import React, { Suspense } from 'react';
import styled, { ThemeProvider, css } from 'styled-components';

// Styling
import 'styles/index.scss';
import { mainTheme } from 'styles';

// Components
import { CSSTransition } from 'react-transition-group';
import { Helmet } from 'react-helmet';
import LazyImport from 'components/UI/LazyImport';
import Loader from 'components/UI/Loader';
import LogoLoader from 'components/UI/LogoLoader';

const LOADER_DELAY = 1000;
const LOADER_DEV_DELAY = 150;
const RESOLVED_CALLBACK_DELAY = process.env.NODE_ENV === 'development' ? LOADER_DEV_DELAY : LOADER_DELAY;

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <ThemeProvider theme={mainTheme}>
      <Wrapper
        animationDuration={RESOLVED_CALLBACK_DELAY}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Denma | Software Development Company
          </title>
        </Helmet>
          <Suspense 
            fallback={(
              <CSSTransition
                in={isLoading}
                timeout={RESOLVED_CALLBACK_DELAY}
                classNames="loaders"
                unmountOnExit
                onExited={() => setIsLoading(false)}
              >
                <Loaders>
                  <StyledLoader size={256} />
                  <StyledLogoLoader />
                </Loaders>
              </CSSTransition>
            )}
          >
            <LazyImport
              delay={LOADER_DELAY}
              devDelay={LOADER_DEV_DELAY}
              resolvedCallback={() => setIsLoading(false)}
              resolvedCallbackDelay={RESOLVED_CALLBACK_DELAY}
              importedComponent={import('containers/Routes')}
            />
          </Suspense>
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  &&& {
    display: flex;
    flex-flow: column;
    height: 100%;

    .loaders-enter {
      opacity: 0;
      transform: scale(0.9);
    }
    .loaders-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: opacity ${props => props.animationDuration}ms, transform ${props => props.animationDuration}ms;
    }
    .loaders-exit {
      opacity: 1;
    }
    .loaders-exit-active {
      opacity: 0;
      transform: scale(0.9);
      transition: opacity ${props => props.animationDuration}ms, transform ${props => props.animationDuration}ms;
    }
  }
`;

const loaderCss = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loaders = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledLoader = styled(Loader)`
  ${loaderCss};
`;

const StyledLogoLoader = styled(LogoLoader)`
  ${loaderCss};
`;

export default App;
