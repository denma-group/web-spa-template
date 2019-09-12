// Libraries
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter, Link } from 'react-router-dom';

// Components
import RoutesWrapper from 'layout/UI/RoutesWrapper';
import { NavbarLogo } from 'components/UI';

import Homepage from 'containers/Homepage';

// Icons
import InfoIcon from '@material-ui/icons/Info';
import ContactIcon from '@material-ui/icons/Mail';
import NewEnterprisesIcon from '@material-ui/icons/Business';
import ExistingAppsIcons from '@material-ui/icons/Apps';

const navbarLogo = (
  <NavbarLogo
    alt="Denma Home"
    title="Denma Home"
    focusable="false"
  />
);

const links = [
  {
    key: 'what_we_do',
    type: 'button',
    color: 'inherit',
    title: 'What we do',
    caption: 'An overview of how we work alongside our clients.',
    icon: <InfoIcon />,
    // wrapper: props => (
    //   <Link
    //     to="/what-we-do"
    //     {...props}
    //   />
    // ),
    wrapperProps: {
      to: '/what-we-do'
    },
  },
  {
    key: 'about us',
    type: 'button',
    color: 'inherit',
    title: 'About us',
    caption: 'Who we are',
    icon: <ExistingAppsIcons />,
    wrapper: Link,
    wrapperProps: {
      to: '/about-us'
    },
  },
  {
    key: 'why_us',
    type: 'button',
    color: 'inherit',
    title: 'Why us?',
    caption: 'Why us? caption',
    icon: <NewEnterprisesIcon />,
    wrapperProps: {
      to: '/why-us'
    },
  },
  {
    key: 'contact_us',
    type: 'button',
    color: 'inherit',
    title: 'Contact us',
    caption: 'Say hello, get in touch with us!',
    icon: <ContactIcon />,
    wrapperProps: {
      to: '/contact-us'
    },
  }
];

const Routes = props => {
  const { location } = props;

  /**
   * Any time the location (route) changes, an instant scroll to the top will execute.
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <RoutesWrapper
      // Navbar props
      navbarLogo={navbarLogo}
      drawerLogo={navbarLogo}
      links={links}
      linkComponent={Link}
      logoWrapperProps={{
        to: '/'
      }}
    >
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hello-world" render={() => <div>Hello world!</div>} />
      </Switch>
    </RoutesWrapper>
  );
};

Routes.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired
};

// const StyledRoutesWrapper = styled.section`
//   display: flex;
//   flex-flow: column;
//   width: 100%;
//   min-height: 100%;
//   animation: fade-in 300ms ease 0ms;

//   @keyframes fade-in {
//     0% {
//       opacity: 0;
//     }
//     100% {
//       opacity: 1;
//     }
//   }
// `;

export default withRouter(Routes);
