import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import { useStyles } from './style';
import Rating from '@material-ui/lab/Rating';

export const ChefProfile = (props) => {
  const ischef = JSON.parse(sessionStorage.getItem('userDetails')) ? JSON.parse(sessionStorage.getItem('userDetails')).ischef : false;
  const classes = useStyles();
  const getpathQuery = (chefId) => {
    const pathQuery = "bookChef/" + chefId;
    return {
      pathname: pathQuery
    };
  };

  const chefDetails = props.chefDetails;
  const loggedInUser = sessionStorage.getItem("userDetails") ? true : false;
  const pathQ = loggedInUser ? '/bookChef' : '/signIn';

  return (
    <Container>
      <Grid container spacing={2} className={classes.chefDetails}>
        <Grid item xs={12} sm={4}>
          <img
            src={chefDetails ? chefDetails.Image : ''}
            alt="Chef Profile"
            height="180"
            width="180"
            className={classes.chefProfilePicture}
          />
        </Grid>
        <Grid item xs={12} sm={8} className={classes.chefProfileInfo}>
          <h1>{chefDetails ? chefDetails.Name : ''}</h1>
          <h3 className={classes.chefProfileAddress}>{chefDetails ? chefDetails.Location : ''}</h3>
          <Rating
            value={chefDetails && chefDetails.Rating ? chefDetails.Rating : 0}
            className={classes.chefRating}
            name="Chef Rating"
            size="medium"
          />
          <span className={classes.chefProfileInfoReviewCount}>({chefDetails.TotalNumberOfCustomersReviewed})</span>
          <div show={!ischef} className={classes.chefProfileInfoButtons}>
            {/* <span className={classes.chefProfileFav}>Add To Favourites</span> */}
            {/* <Link to={getpathQuery(chefDetails && chefDetails.Email)} style={{ textDecoration: 'none', display: 'block', color: "inherit" }}>
              <Button variant="contained" color="primary">
                Book a Slot
              </Button>
            </Link> */}

            {ischef ?
              null :
              <Link to={pathQ} style={{ textDecoration: 'none', display: 'block', color: "inherit" }} onClick={sessionStorage.setItem("chefDetails", JSON.stringify(chefDetails))}>
                <Button variant="contained" color="primary">
                  Book a Slot
                </Button>
              </Link>}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
