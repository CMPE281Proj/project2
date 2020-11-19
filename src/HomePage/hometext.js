import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '80vh',
    fontFamily: 'Nunito',
    fontSize: '30px',
  },

  colorText: {
    color: 'red',
  },
  container: {
    textAlign: 'center',
  },
  
  button: {
    fontSize: '15px'
  }
  
}));


export default function Header1() {
  const classes = useStyles();
  
  return (
    <div className={classes.root} id="header">
        <div className={classes.container}>
          <h1 className={classes.title}>
            Find Your <br />
            <span className={classes.colorText}> CHEF </span>
          </h1>
            <div className={classes.button}>
            <Button target="_blank" href="http://localhost:3000/findChef" color="secondary" variant="contained"> Find Chef</Button>
            </div>
        </div>
      
    </div>
  );
}