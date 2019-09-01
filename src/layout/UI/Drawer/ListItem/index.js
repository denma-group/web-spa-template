// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const Item = props => {
  const {
    icon,
    title,
    caption,
    ...rest
  } = props;
  return (
    <StyledListItem
      button
      {...rest}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <StyledListItemText
        primary={(
          <StyledListTitle
            variant="subtitle1"
          >
            {title}
          </StyledListTitle>
        )}
        secondary={(
          <StyledListCaption
            variant="caption"
            gutterBottom
          >
            {caption}
          </StyledListCaption>
        )}
      />
    </StyledListItem>
  );
};

Item.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired
};

const StyledListItemText = styled(ListItemText)`
  &&& {
    padding: 0 4px;
  }
`;

const StyledListTitle = styled(Typography)`
  &&& {
    transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-weight: 600;
  }
`;

const StyledListCaption = styled(Typography)`
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
