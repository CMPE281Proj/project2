import React from "react";

import { ChefReceipes } from './ChefReceipes';
import { ChefReviews } from './ChefReviews';

export const ChefPhotosReviews = (props) => {
  return (
    <div>
      <ChefReceipes chefId={props.chefId}/>
      <ChefReviews chefName={props.chefName} />
    </div>
  );
}