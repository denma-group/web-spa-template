// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Subtitle, Caption } from 'components/UI/Text';

const Item = props => {
  const {
    icon,
    title,
    caption,
    // The following two props are handled by the render worker functions in an upper scope.
    linkComponent: LinkComponent,
    wrapper: ItemWrapperComponent,
    wrapperProps,
    ...rest
  } = props;
  const Wrapper = ItemWrapperComponent || LinkComponent;
  const navLink = (
    <StyledListItem
      button
      {...rest}
    >
      {icon && (
        <ListItemIcon>{icon}</ListItemIcon>
      )}
      <StyledListItemText
        primary={(
          <StyledListTitle
            color="whiteColor"
          >
            {title}
          </StyledListTitle>
        )}
        secondary={(
          <StyledListCaption
            color="whiteColor"
            gutterBottom
          >
            {caption}
          </StyledListCaption>
        )}
      />
    </StyledListItem>
  );
  return ItemWrapperComponent ? (
    <Wrapper
      {...wrapperProps}
    >
      {navLink}
    </Wrapper>
  ) : navLink;
};

Item.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  linkComponent: PropTypes.func,
  wrapper: PropTypes.func,
  wrapperProps: PropTypes.instanceOf(Object),
};

Item.defaultProps = {
  linkComponent: undefined,
  wrapper: undefined,
  wrapperProps: undefined,
};

const StyledListItemText = styled(ListItemText)`
  &&& {
    padding: 0 4px;
  }
`;

const StyledListTitle = styled(Subtitle)`
  &&& {
    transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-weight: 600;
  }
`;

const StyledListCaption = styled(Caption)`
  &&& {
    opacity: 0.75;
    font-weight: normal;
  }
`;

const StyledListItem = styled(ListItem)`
  &&& {
    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    :hover {
      text-decoration: none;
      background-color: rgba(255, 255, 255, 0.08);
      color: ${props => props.theme.secondary}
    }
    :hover ${StyledListTitle} {
      color: ${props => props.theme.primary}
    }
  }
`;

export default Item;
