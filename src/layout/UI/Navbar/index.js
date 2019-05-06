// Libraries
import React from 'react';
import styled from 'styled-components';

// JSX
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const StyledAppBar = styled(AppBar)`
  && {
    color: ${props => props.theme.whiteColor};
    background-color: ${props => props.theme.darkColor};
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);

    h6 {
      flex-grow: 1;
    }

    button {
      margin-left: -12;
      margin-right: 20;
    }
  }
`;

const Navbar = () => (
  <StyledAppBar position="static">
    <Toolbar>
      <IconButton color="inherit" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit">
        Denma
      </Typography>
      <Button color="inherit">Contact us</Button>
    </Toolbar>
  </StyledAppBar>
);

export default (Navbar);
