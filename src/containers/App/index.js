// Libraries
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Styling
import 'styles/index.scss';
import { mainTheme } from 'styles';

// Components
import { Helmet } from 'react-helmet';
import Routes from 'containers/Routes';

const Wrapper = styled.main`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

const App = () => (
  <ThemeProvider theme={mainTheme}>
    <Wrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Denma | Software Development Company
        </title>
      </Helmet>
      <Routes />
    </Wrapper>
  </ThemeProvider>
);

export default App;
