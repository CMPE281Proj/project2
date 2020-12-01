import React from 'react';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PersonIcon from '@material-ui/icons/Person';

export const MobileMenuBar = (props) => {

  return (
    <Menu
      anchorEl={props.mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={props.mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={props.isMobileMenuOpen}
      onClose={props.setMobileMoreAnchorEl}
    >
      {!props.isLoggedIn ? <Link to="/signIn" style={{ textDecoration: 'none', display: 'block', color: "inherit" }}>
        <MenuItem>
          <IconButton aria-label="search" color="inherit">
            <PersonIcon />
          </IconButton>
          <p>Sign In</p>
        </MenuItem>
      </Link> : null}
      <Link to="/findChefs" style={{ textDecoration: 'none', display: 'block', color: "inherit" }}>
        <MenuItem>
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <p>Find My Chef</p>
        </MenuItem>
      </Link>
      {props.isLoggedIn ? <Link to="/history" style={{ textDecoration: 'none', display: 'block', color: "inherit" }}>
        <MenuItem>
          <IconButton aria-label="bookmark" color="inherit">
            <BookmarkIcon />
          </IconButton>
          <p>History</p>
        </MenuItem>
      </Link> : null}
      {props.isLoggedIn ? <MenuItem onClick={props.setAnchorEl}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem> : null}
    </Menu>
  );
}
