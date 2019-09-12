// Libraries
import React from 'react';
import styled, { css } from 'styled-components';

// Components
import Grid from '@material-ui/core/Grid';

const StyledRow = styled(({ height, styledCss, ...rest }) => (
  <Grid
    {...rest}
    container
  />
))`
  position: relative;
  padding: ${({ padding }) => padding};
  ${({ height, minHeight }) => {
    // If minHeight, return it prioritizing it before height.
    if (minHeight) {
      return css`
        height: ${height};
        min-height: ${minHeight};
      `;
    }
    // If only height, set it as `min-height` to make it more responsive.
    switch (typeof height) {
      case 'number':
        return css`
          min-height: ${height ? `${height}px` : '100vh'};
        `;
      case 'string':
        return css`
          min-height: ${height || '100vh'};
        `;
      default:
        return '';
    }
  }};
`;

const Row = props => (
  <StyledRow
    {...props}
  />
);

const Col = props => (
  <Grid
    {...props}
    item
  />
);

export {
  Row,
  Col,
};
