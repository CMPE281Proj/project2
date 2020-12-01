import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import PersonIcon from '@material-ui/icons/Person';
// import ChatIcon from '@material-ui/icons/Chat';

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));
export const DesktopAppBar = (props) => {
  const classes = useStyles();
  const loggedInUser = props.isLoggedIn;

  return (
    <div className={classes.sectionDesktop}>
      {!loggedInUser ? <Link to="/signIn" style={{ textDecoration: 'none', display: 'block', color: "inherit" }}>
        <MenuItem>
          <IconButton aria-label="search" color="inherit">
            <PersonIcon />
          </IconButton>
          <p>Sign In</p>
        </MenuItem>
      </Link> : null}
      {/* <Link to="/bookChef" style={{ textDecoration: 'none', display: 'block', color: "inherit" }}>
        <MenuItem>
          <IconButton aria-label="search" color="inherit">
            <PersonIcon />
          </IconButton>
          <p>Book Chef</p>
        </MenuItem>
      </Link> */}
      <Link to="/findChef" style={{ textDecoration: 'none', display: 'block', color: "inherit" }}>
        <MenuItem>
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <p>Find My Chef</p>
        </MenuItem>
      </Link>
      {loggedInUser ? <Link to="/history" style={{ textDecoration: 'none', display: 'block', color: "inherit" }}>
        <MenuItem>
          <IconButton aria-label="bookmark" color="inherit">
            <BookmarkIcon />
          </IconButton>
          <p>History</p>
        </MenuItem>
      </Link> : null}
      {/* <Link to="/lexbot" style={{ textDecoration: 'none', display: 'block', color: "inherit" }}>
        <MenuItem>
          <IconButton aria-label="bookmark" color="inherit">
            <ChatIcon />
          </IconButton>
          <p>Chat</p>
        </MenuItem>
      </Link> */}
      { loggedInUser ? <MenuItem onClick={props.setAnchorEl}>
        <IconButton
          aria-label="account of current user"
          aria-controls={props.menuId}
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem> : null}
    </div>
  );
}