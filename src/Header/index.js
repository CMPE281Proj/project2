import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import { DesktopAppBar } from './Desktop/DesktopAppBar';
import { DesktopMenuBar } from './Desktop/DesktopMenuBar';
import { MobileAppBar } from './Mobile/MobileAppBar';
import { MobileMenuBar } from './Mobile/MobileMenuBar';
import LocalDiningIcon from '@material-ui/icons/LocalDining';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const Header = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const mobileMenuId = 'primary-search-account-menu-mobile';
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            {/* <MenuIcon /> */}
            <LocalDiningIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link to='/' style={{ textDecoration: 'none', display: 'block', color: "inherit" }}> Find My Chef</Link>
          </Typography>
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}
          <div className={classes.grow} />
          <DesktopAppBar setAnchorEl={(event) => setAnchorEl(event.currentTarget)} menuId={menuId} isLoggedIn={props.isLoggedIn} />
          <MobileAppBar setMobileMoreAnchorEl={(event) => setMobileMoreAnchorEl(event.currentTarget)} mobileMenuId={mobileMenuId} isLoggedIn={props.isLoggedIn} />
        </Toolbar>
      </AppBar>
      <MobileMenuBar
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        setMobileMoreAnchorEl={handleMobileMenuClose}
        mobileMenuId={mobileMenuId}
        isMobileMenuOpen={isMobileMenuOpen}
        setAnchorEl={(event) => setAnchorEl(event.currentTarget)}
        isLoggedIn={props.isLoggedIn}
      />
      <DesktopMenuBar onIsLoggedIn={props.onIsLoggedIn} anchorEl={anchorEl} setAnchorEl={(target) => setAnchorEl(target)} menuId={menuId} isMenuOpen={isMenuOpen} />
    </div>
  );
}

export default Header;