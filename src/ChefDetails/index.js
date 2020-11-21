import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import { ChefProfile } from './ChefProfile';
import { ChefServices } from './ChefServices';
import { ChefPhotosReviews } from './ChefPhotosReviews';
export const ChefDetails = (props) => {

  const [chefId] = useState(props.match.params.chefId);
  return (
    <Container maxWidth="md">
      <ChefProfile />
      <Grid container spacing={5}>
        <Grid item xs={12} sm={4}>
          <ChefServices />
        </Grid>
        <Grid item xs={12} sm={8}>
          <ChefPhotosReviews />
        </Grid>
      </Grid>
    </Container>
  );
}
