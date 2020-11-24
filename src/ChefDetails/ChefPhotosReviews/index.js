import React from "react";

import { ChefReceipes } from './ChefReceipes';
export const ChefPhotosReviews = (props) => {
  return (
    <ChefReceipes chefId={props.chefId}/>
  );
}