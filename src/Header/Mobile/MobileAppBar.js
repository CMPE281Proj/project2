import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
    },
  }));
export const MobileAppBar = (props) => {
    const classes = useStyles();
    
    return (
    <div className={classes.sectionMobile}>
        <IconButton
          aria-label="show more"
          aria-controls={props.mobileMenuId}
          aria-haspopup="true"
          onClick={props.setMobileMoreAnchorEl}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
    </div>
    );
}