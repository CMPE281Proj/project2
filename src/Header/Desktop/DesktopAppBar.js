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

  return (
    <div className={classes.sectionDesktop}>
      <Link to="/signIn" style={{ textDecoration: 'none', display: 'block', color: "inherit" }}>
        <MenuItem>
          <IconButton aria-label="search" color="inherit">
            <PersonIcon />
          </IconButton>
          <p>Sign In</p>
        </MenuItem>
      </Link>
      <Link to="/bookChef" style={{ textDecoration: 'none', display: 'block', color: "inherit" }}>
        <MenuItem>
          <IconButton aria-label="search" color="inherit">
            <PersonIcon />
          </IconButton>
          <p>Book Chef</p>
        </MenuItem>
      </Link>
      <Link to="/findChef" style={{ textDecoration: 'none', display: 'block', color: "inherit" }}>
        <MenuItem>
          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <p>Find Chef</p>
        </MenuItem>
      </Link>
      <Link to="/history" style={{ textDecoration: 'none', display: 'block', color: "inherit" }}>
        <MenuItem>
          <IconButton aria-label="bookmark" color="inherit">
            <BookmarkIcon />
          </IconButton>
          <p>History</p>
        </MenuItem>
      </Link>
      {/* <Link to="/jobAlerts" style={{ textDecoration: 'none', display: 'block', color:"inherit" }}>
              <MenuItem>
                <IconButton aria-label="show 16 new notifications" color="inherit">
                  <Badge badgeContent={16} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <p>Job Alerts</p>
              </MenuItem>
            </Link> */}
      <MenuItem onClick={props.setAnchorEl}>
        <IconButton
          aria-label="account of current user"
          aria-controls={props.menuId}
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </div>
  );
}