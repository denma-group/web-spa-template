import 'styles/index.scss';
import React from 'react';
import { mainTheme } from 'styles';
import styled, { ThemeProvider } from 'styled-components';

const Wrapper = styled.main`
  min-height: 100vh;
  ${props => console.log('styled component props', props)}
`;

console.log('mainTheme', mainTheme);

const App = () => (
  <ThemeProvider theme={mainTheme}>
    <Wrapper>
      App
    </Wrapper>
  </ThemeProvider>
);

export default App;
