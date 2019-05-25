// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RoutesWrapper = props => {
  const { children, ...rest } = props;
  return (
    <PageWrapper {...rest}>
      {children}
    </PageWrapper>
  );
};

RoutesWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

const PageWrapper = styled.main`
  background: transparent;
  flex: 1;
`;

export default RoutesWrapper;
