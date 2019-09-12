// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import Logo from 'components/SVG/Logos/DenmaHorizontal_NM';

const NavbarLogo = () => (
  <StyledLogo
    alt="Denma Home"
    title="Denma Home"
    focusable="false"
  />
);

const StyledLogo = styled(Logo)`
    width: 100%;
    height: auto;
    max-width: 225px;
    cursor: pointer;
    @media (max-width: 600px) {
      max-width: 150px !important;
    }
`;

export default NavbarLogo;
