// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Icons
import InfoIcon from '@material-ui/icons/Info';
import WorkIcon from '@material-ui/icons/GroupWork';
import ContactIcon from '@material-ui/icons/Mail';

import DesignIcon from '@material-ui/icons/DeveloperBoard';
import DevelopIcon from '@material-ui/icons/DeveloperMode';
import DeliverIcon from '@material-ui/icons/HowToReg';
import MaintainIcon from '@material-ui/icons/Sync';

import NewEnterprisesIcon from '@material-ui/icons/Business';
import ExistingAppsIcons from '@material-ui/icons/Apps';
import MarketingIcon from '@material-ui/icons/DataUsage';
import TechConsultingIcon from '@material-ui/icons/PhoneIphone';

// Components
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Logo from 'components/SVG/Logos/DenmaHorizontal_NM';
import ListItem from './ListItem';

const NavbarDrawer = props => {
  const {
    open,
    closeDrawer,
    ...rest
  } = props;

  const fullList = (
    <StyledList>
      <LogoWrapper>
        <a role="button">
          <StyledLogo
            alt="Denma Home"
            title="Denma Home"
            focusable="false"
          />
        </a>
        <IconButton
          color="inherit"
          aria-label="Menu"
          onClick={closeDrawer}
        >
          <MenuIcon />
        </IconButton>
      </LogoWrapper>
      <StyledDivider />
      <List>
        {[
          { icon: <InfoIcon />, title: 'About us', caption: 'Meaning of DENMA, and our values' }, 
          { icon: <WorkIcon />, title: 'About our work', caption: 'An overview of how we work alongside our clients' }, 
          { icon: <ContactIcon />, title: 'Contact', caption: 'How to get in touch' }, 
        ].map(item => (
          <ListItem
            key={item.title}
            onClick={closeDrawer}
            {...item}
          />
        ))}
      </List>
      <StyledDivider />
      <StyledListHeader variant="title">
        How we work
      </StyledListHeader>
      <List>
        {[
          { icon: <DesignIcon />, title: 'Design', caption: 'Design caption' }, 
          { icon: <DevelopIcon />, title: 'Develop', caption: 'Develop caption' }, 
          { icon: <DeliverIcon />, title: 'Deliver', caption: 'Deliver caption' }, 
          { icon: <MaintainIcon />, title: 'Maintain', caption: 'Maintain caption' }, 
        ].map(item => (
          <ListItem
            key={item.title}
            onClick={closeDrawer}
            {...item}
          />
        ))}
      </List>
      <StyledDivider />
      <StyledListHeader variant="title">
        How we help
      </StyledListHeader>
      <List>
        {[
          { icon: <NewEnterprisesIcon />, title: 'New Enterprises', caption: 'New Enterprises caption' }, 
          { icon: <ExistingAppsIcons />, title: 'Existing Applications', caption: 'Existing Applications caption' }, 
          { icon: <MarketingIcon />, title: 'Marketing Strategies and Analytics', caption: 'Marketing Strategies and Analytics caption' }, 
          { icon: <TechConsultingIcon />, title: 'Tech Consulting', caption: 'Tech Consulting caption' }, 
        ].map(item => (
          <ListItem
            key={item.title}
            onClick={closeDrawer}
            {...item}
          />
        ))}
      </List>
    </StyledList>
  );

  return (
    <StyledDrawer
      anchor="top"
      open={open}
      onClose={closeDrawer}
      {...rest}
    >
      <div
        tabIndex={0}
        role="button"
        onKeyDown={closeDrawer}
      >
        {fullList}
      </div>
    </StyledDrawer>
  );
};

NavbarDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  closeDrawer: PropTypes.func.isRequired
};

const StyledDrawer = styled(Drawer)`
  &&& {
    * {
      color: ${props => props.theme.whiteColor};
    }
    .MuiDrawer-paperAnchorRight-89 {
      background-color: ${props => props.theme.lightDarkColor};
    }
  }
`;

const LogoWrapper = styled.div`
  &&& {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 18px 0;
    
    button:hover {
      text-decoration: none;
      background-color: rgba(255, 255, 255, 0.08);
    }

    button {
      padding: 3px;
      margin: 0 0 0 24px;
    }

    button svg {
      width: 35px;
      height: 35px;
    }
  }
`;

const StyledLogo = styled(Logo)`
  width: 100%;
  height: auto;
  max-width: 225px;
  cursor: pointer;
`;

const StyledDivider = styled(Divider)`
  &&& {
    background-color: ${props => props.theme.whiteColor};
    opacity: 0.12;
  }
`;

const StyledList = styled.div`
  width: 40vw;
  max-width: 480px;

  @media (max-width: 720px) {
    width: 100vw;
    max-width: none;
  }
`;

const StyledListHeader = styled(Typography)`
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
}`;

export default NavbarDrawer;
