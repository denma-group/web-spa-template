// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import RawDivider from '@material-ui/core/Divider';
import Logo from 'components/SVG/Logos/DenmaHorizontal_NM';
import { H6 } from 'components/UI/Text';

const NavbarLogo = () => (
  <StyledLogo
    alt="Denma Home"
    title="Denma Home"
    focusable="false"
  />
);

const DrawerLogo = () => (
  <StyledDrawerLogo
    alt="Denma Home"
    title="Denma Home"
    focusable="false"
  />
);

const Spacing = styled.div`
  background: transparent;
  @media (min-width: 600px) {
    min-height: 64px !important;
  }

  @media (min-width: 0px) and (orientation: landscape) {
    min-height: 48px;
  }
  min-height: 56px;
`;

const StyledLogo = styled(Logo)`
    width: 100%;
    height: auto;
    max-width: 225px;
    cursor: pointer;
    @media (max-width: 600px) {
      max-width: 150px !important;
    }
`;

const StyledDrawerLogo = styled(StyledLogo)`
  max-width: 125px;
  @media (min-width: 600px) {
    max-width: 225px !important;
  }

  @media (min-width: 0px) and (orientation: landscape) {
    max-width: 150px;
  }
`;

const Header = styled(H6)`
  &&& {
    display: flex;
    width: 100%;
    position: relative;
    box-sizing: border-box;
    text-align: left;
    align-items: center;
    margin: 0;
    padding: 19px 22px 11px;
    justify-content: flex-start;
    text-decoration: none;
    user-select: none;
  }
`;

const Divider = styled(RawDivider)`
  &&& {
    background-color: ${props => props.theme.whiteColor};
    opacity: 0.12;
  }
`;

const DrawerList = styled.div`
  width: 40vw;
  max-width: 480px;

  @media (max-width: 720px) {
    width: 100vw;
    max-width: none;
  }
`;

export {
  NavbarLogo,
  // DrawerLogo,
  Spacing,
  Header,
  Divider,
  DrawerList,
};
