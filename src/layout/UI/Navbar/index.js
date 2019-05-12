// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from 'layout/UI/Drawer';
import Logo from 'components/SVG/Logos/DenmaHorizontal_NM';

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <React.Fragment>
      <StyledAppBar position="static">
        <Toolbar>
          <a role="button">
            <StyledLogo
              alt="Denma Home"
              title="Denma Home"
              focusable="false"
            />
          </a>
          <div className="spacing" />
          <Button color="inherit">Contact us</Button>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={() => setDrawerOpen(!isDrawerOpen)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </StyledAppBar>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        closeDrawer={() => setDrawerOpen(false)}
      />
    </React.Fragment>
  );
};

const StyledAppBar = styled(AppBar)`
  && {
    color: ${props => props.theme.whiteColor};
    background-color: ${props => props.theme.lightDarkColor};
    box-shadow: none;

    .spacing {
      flex-grow: 1;
    }

    button:first-of-type {
      margin-left: -12px;
      margin-right: 20px;
    }

    button:last-of-type {
      float: right;
    }

    button:hover {
      text-decoration: none;
      background-color: rgba(255, 255, 255, 0.08);
    }
  }
`;

const StyledLogo = styled(Logo)`
  width: 100%;
  height: auto;
  max-width: 225px;
  cursor: pointer;
`;

export default Navbar;
