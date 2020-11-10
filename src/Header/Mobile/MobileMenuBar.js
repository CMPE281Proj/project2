import React from 'react';
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import BookmarkIcon from '@material-ui/icons/Bookmark';

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
        <Link to="/findJobs" style={{ textDecoration: 'none', display: 'block', color:"inherit" }}>
            <MenuItem>
                <IconButton aria-label="search" color="inherit">
                <SearchIcon />
                </IconButton>
                <p>Find Jobs</p>
            </MenuItem>
        </Link>
        <Link to="/myJobs" style={{ textDecoration: 'none', display: 'block', color:"inherit" }}>
            <MenuItem>
                <IconButton aria-label="bookmark" color="inherit">
                <BookmarkIcon />
                </IconButton>
                <p>My Jobs</p>
            </MenuItem>
        </Link>
        <Link to="/jobAlerts" style={{ textDecoration: 'none', display: 'block', color:"inherit" }}>
            <MenuItem>
            <IconButton aria-label="show 11 new notifications" color="inherit">
                <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
                </Badge>
            </IconButton>
            <p>Job Alerts</p>
            </MenuItem>
        </Link>
        <MenuItem onClick={props.setAnchorEl}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );
}
