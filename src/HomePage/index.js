import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import HomeText from './hometext';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/background1.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
 
   },
}));
export default function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <HomeText/>
  
    </div>
  );
}