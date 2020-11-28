import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import { ChefProfile } from './ChefProfile';
import { ChefServices } from './ChefServices';
import { ChefPhotosReviews } from './ChefPhotosReviews';
import { ChefDetailsAPI } from './ChefDetailsAPI';

export const ChefDetails = (props) => {

  const [chefId] = useState(props.match.params.chefId);
  const [chefDetails, setChefDetails] = useState([]);

  useEffect(() => {    
    ChefDetailsAPI({"Email": chefId}).then(function (response) {
        setChefDetails(response);
        console.log('ChefDetailsAPI', response);
    })
    .catch(function (error) {
      setChefDetails(null);
        console.log('ChefDetailsAPI error', error);
    }); 
  }, []);

  return (
    <Container maxWidth="md">
      <ChefProfile chefDetails={chefDetails}/>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <ChefServices chefDetails={chefDetails}/>
        </Grid>
        <Grid item xs={12} sm={8}>
          <ChefPhotosReviews chefId={chefId} chefName={chefDetails.Name}/>
        </Grid>
      </Grid>
    </Container>
  );
}
