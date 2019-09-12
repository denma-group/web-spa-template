// Libraries
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

// Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from './Drawer';
import { Spacing } from './components';
import HideOnScroll from './HideOnScroll';

// Dependencies
import Provider, { NavbarContext as Context } from './context';

// LinkComponents
import { getShouldRenderDrawerIcon, renderNavLinks } from './links';

// Navbar React Context exports
export const NavbarContext = Context;
export const NavbarProvider = Provider;

const Navbar = props => {
  const {
    links,
    navbarLogo,
    logoWrapperProps = {
      href: '/'
    },
    drawerLogo,
    linkComponent: LinkComponent,
  } = props;
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // Styling context
  const {
    colorState: [color],
    backgroundColorState: [backgroundColor],
    opacityState: [opacity],
    positionState: [position],
    boxShadowState: [boxShadow],
    transformState: [transform],
    cssState: [styledCss],
  } = useContext(NavbarContext);

  // Will only render the burger icon to the right if necessary
  const shouldRenderDrawerIcon = getShouldRenderDrawerIcon(links);

  return (
    <>
      <Spacing />
      <HideOnScroll>
        <StyledAppBar
          position={position}
          color={color}
          backgroundColor={backgroundColor}
          opacity={opacity}
          boxShadow={boxShadow}
          transform={transform}
          styledCss={styledCss}
        >
          <Toolbar>
            <LinkComponent {...logoWrapperProps}>
              <a role="button">
                {navbarLogo}
              </a>
            </LinkComponent>
            <div className="spacing" />
            {renderNavLinks(links, LinkComponent)}
            <StyledIconButton
              color="inherit"
              aria-label="Menu"
              onClick={() => setDrawerOpen(!isDrawerOpen)}
              className="menu-button"
              shouldRenderDrawerIcon={shouldRenderDrawerIcon}
            >
              <MenuIcon />
            </StyledIconButton>
          </Toolbar>
        </StyledAppBar>
      </HideOnScroll>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        closeDrawer={() => setDrawerOpen(false)}
        logo={drawerLogo}
        logoWrapperProps={logoWrapperProps}
        links={links}
        linkComponent={LinkComponent}
      />
    </>
  );
};

const StyledAppBar = styled(({ color, backgroundColor, opacity, boxShadow, transform, styledCss, ...rest }) => <AppBar {...rest} />)`
  &&& {
    ${props => (
      css`
        color: ${props.color || props.theme.brandLightBlack};
        background-color: ${props.backgroundColor || 'transparent'};
        opacity: ${({ opacity }) => (
          (
            opacity !== null ||
            opacity !== undefined
          ) ? opacity : 1
        )};
        box-shadow: ${props.boxShadow || 'none'};
        transform: ${props.transform || undefined};
      `
    )}
    ${props => (props.styledCss && props.styledCss)}
    transition: all ease 150ms;
    transition-property: color, background-color, opacity, transform;

    a:any-link, a:-webkit-any-link {
      color: unset;
    }

    .spacing {
      flex-grow: 1;
    }

    .menu-button {
      margin-left: 20px;
      float: right;
    }

    button:hover {
      text-decoration: none;
      background-color: rgba(255, 255, 255, 0.08);
    }

    ${({ theme }) => css`
      .MuiToolbar-root > .MuiButtonBase-root:not(.menu-button),
      .MuiToolbar-root > .dropdown-menu {
        @media (min-width: ${theme.screenLg}) {
          display: inline-flex;
        }

        @media (min-width: 0px) and (max-width: ${theme.screenLg}) {
          display: none;
        }
      }
    `}
  }
`;

const StyledIconButton = styled(({ shouldRenderDrawerIcon, ...rest }) => <IconButton {...rest} />)`
  ${({ theme, shouldRenderDrawerIcon }) => css`
    &&& {
      @media (min-width: ${theme.screenLg}) {
        display: ${shouldRenderDrawerIcon ? 'inline-flex' : 'none'};
      }

      @media (min-width: 0px) and (max-width: ${theme.screenLg}) {
        display: inline-flex;
      }
    }
  `}
`;

Navbar.propTypes = {
  links: PropTypes.instanceOf(Array).isRequired,
  navbarLogo: PropTypes.node.isRequired,
  logoWrapperProps: PropTypes.instanceOf(Object),
  drawerLogo: PropTypes.node,
  linkComponent: PropTypes.func,
};

Navbar.defaultProps = {
  logoWrapperProps: undefined,
  drawerLogo: null,
  linkComponent: null,
};

export default Navbar;
