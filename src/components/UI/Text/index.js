import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const H1 = ({ children, ...rest }) => (
  <Typography variant="h1" {...rest}>
    {children}
  </Typography>
);

const H2 = ({ children, ...rest }) => (
  <Typography variant="h2" {...rest}>
    {children}
  </Typography>
);

const H3 = ({ children, ...rest }) => (
  <Typography variant="h2" {...rest}>
    {children}
  </Typography>
);

const P = ({ children, ...rest }) => (
  <Typography variant="body1" {...rest}>
    {children}
  </Typography>
);

const StyledH1 = styled(H1)`
  &&& {
    font-size: 42px;
    line-height: 54px;
    ${({ css }) => css};
    /* TODO: screen size changes */
  }
`;
const StyledH2 = styled(H2)`
  &&& {
    font-size: 34px;
    line-height: 46px;
    ${({ css }) => css};
    /* TODO: screen size changes */
  }
`;
const StyledH3 = styled(H3)`
  &&& {
    font-size: 24px;
    line-height: 36px;
    ${({ css }) => css};
    /* TODO: screen size changes */
  }
`;

const StyledP = styled(P)`
  &&& {
    font-size: 16px;
    line-height: 20px;
    ${({ css }) => css};
    /* TODO: screen size changes */
  }
`;

const StyledSpan = styled.span`
  font-size: inherit;
  line-height: inherit;
  ${({ css }) => css};
`;

H1.propTypes = {
  children: PropTypes.node.isRequired
};

H2.propTypes = {
  children: PropTypes.node.isRequired
};

H3.propTypes = {
  children: PropTypes.node.isRequired
};

P.propTypes = {
  children: PropTypes.node.isRequired
};

export default {
  H1: StyledH1,
  H2: StyledH2,
  H3: StyledH3,
  P: StyledP,
  Span: StyledSpan
};
