import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Auth } from 'aws-amplify';
import { Link } from "react-router-dom";

export const DesktopMenuBar = (props) => {
  const mailid = JSON.parse(sessionStorage.getItem('userDetails')) ? JSON.parse(sessionStorage.getItem('userDetails')).userEmailId : '';
  const ischef = JSON.parse(sessionStorage.getItem('userDetails')) ? JSON.parse(sessionStorage.getItem('userDetails')).ischef : false;
  const profilePath = ischef ? '/chefProfile/' + mailid : '/custProfile';
  const handleMenuClose = () => {
    props.setAnchorEl(null);
  };
  const handleLogout = async () => {
    props.setAnchorEl(null);
    await Auth.signOut();
    sessionStorage.clear();
    props.onIsLoggedIn(false);
  }
  return (
    <Menu
      anchorEl={props.anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={props.menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={props.isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to={profilePath} style={{ textDecoration: 'none', display: 'block', color: "inherit" }} >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      </Link>
      <Link to="/signIn" style={{ textDecoration: 'none', display: 'block', color: "inherit" }}
        onClick={handleLogout}>
        <MenuItem>Logout</MenuItem>
      </Link>
    </Menu>
  );
}
