// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import RawFab from '@material-ui/core/Fab';

const Fab = props => (
  <StyledFab {...props} />
);

const StyledFab = styled(({ color, backgroundColor, ...rest }) => <RawFab {...rest} />)`
  &&& {
    display: inline-block;
    width: fit-content;
    border-top-left-radius: 28px;
    border-bottom-left-radius: 28px;
    border-top-right-radius: 28px;
    border-bottom-right-radius: 28px;
    min-height: 56px;
    height: auto;
    padding: 8px 12px;
    margin: 6px 0;
    color: ${({ theme, color }) => theme[color]};
    border: 2px solid ${({ theme, color }) => theme[color]};
    background-color: ${({ theme, backgroundColor }) => theme[backgroundColor] || 'transparent'};
    box-shadow: none;

    @media (max-width: ${({ theme }) => theme.screenMd}) {
      padding: 4px 8px;
      font-size: 14px;
      margin-bottom: 8px;
    }

    span {
      min-width: 70px;
      color: inherit;
      font-size: 18px;
      font-weight: 700;

      @media (max-width: ${({ theme }) => theme.screenMd}) {
        font-size: 15px;
      }
    }

    @media (max-height: ${({ theme }) => theme.screenSm}) {
      margin-bottom: 16px !important;
    }
  }
`;

export default Fab;
