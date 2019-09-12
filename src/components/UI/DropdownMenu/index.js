// Libraries
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

// Components
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';

const DropdownMenu = props => {
  const {
    id,
    header,
    color,
    backgroundColor,
    menuClassName,
    items = [],
    ...rest
  } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  if (!header) return null;

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const menuId = `${id}-menu`;

  return (
    <div className="dropdown-menu">
      <Button
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseEnter={handleClick}
        color="inherit"
      >
        {header}
      </Button>
      <StyledMenu
        id={menuId}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={4}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        className={menuClassName}
        color={color}
        backgroundColor={backgroundColor}
        {...rest}
      >
        {items.map(item => (
          <MenuItem
            key={item.key}
          >
            {item.icon}
            <ListItemText
              primary={item.title}
              secondary={item.caption}
            />
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};

DropdownMenu.propTypes = {
  id: PropTypes.string.isRequired,
  header: PropTypes.node.isRequired,
  items: PropTypes.instanceOf(Array).isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  menuClassName: PropTypes.string,
};

DropdownMenu.defaultProps = {
  color: undefined,
  backgroundColor: undefined,
  menuClassName: undefined,
};

const StyledMenu = styled(({ color, backgroundColor, menuClassName, ...rest }) => <Menu {...rest} />)`
  ${({ color, backgroundColor, theme }) => css`
    &&& {
      .MuiPaper-root {
        color: ${color};
        background-color: ${backgroundColor};
        .MuiSvgIcon-root {
          margin-right: 0.5em;
        }
        .MuiListItemText-root {
          transition: background-color 150ms cubic-bezier(0.4,0,0.2,1) 0ms,color 150ms cubic-bezier(0.4,0,0.2,1) 0ms;
        }
        .MuiTypography-colorTextSecondary {
          color: inherit;
          opacity: 0.75;
        }
        .MuiListItem-button:hover {
          .MuiListItemText-root {
            color: ${theme.primary};
          }
        }
      }
    }
  `}
`;

export default DropdownMenu;
