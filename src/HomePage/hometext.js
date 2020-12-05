import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  home: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '80vh',
    fontFamily: 'Nunito',
    fontSize: '2em',
  },



  homecontainer: {
    textAlign: 'center',
  },

  hometitle: {
    fontSize: '1.3em'
  },

  button: {
    fontSize: '1em'
  }

}));


export default function HomeText() {
  const classes = useStyles();

  return (
    <div className={classes.home} >
      <div className={classes.homecontainer}>
        <h1 className={classes.hometitle}>
          <div >Your Favourite Recipes, </div>
          <div> By Your Favourite Chefs </div>
          <div>In your Kitchen </div>

        </h1>

        <Link to="/findchef"
          style={{ textDecoration: 'none', display: 'block', color: "primary", variant: "contained" }}>
          <div>
            <Button target="link" color="primary" variant='contained'>
              <p>Find My Chef</p>
            </Button>
          </div>


        </Link>
      </div>

    </div>
  );
}

