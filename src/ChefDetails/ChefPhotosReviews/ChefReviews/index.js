import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import GetChefReviews from './GetChefReviews';

const useStyles = makeStyles((theme) => ({
  chefReviews: {
    textAlign: 'left'
  },
  reviewText: {
    display: 'flex',
    fontSize: '1.2em',
    color: '#444',
    textAlign: 'left',
    padding: '0'
  },
  customerImage: {
    height: '80px',
    width: '80px',
    borderRadius: '80px',
    marginRight: '15px'
  },
  customerDetails: {
    display: 'flex',
    padding: '10px 0'
  }
}));

export const ChefReviews = (props) => {
  const classes = useStyles();
  const [chefreviews, setChefReviews] = React.useState([]);
  
  useEffect(() => {    
    GetChefReviews({"ChefName": props.chefName}).then(function (response) {
      setChefReviews(response);
        console.log('setChefReviews', response);
    })
    .catch(function (error) {
      setChefReviews([]);
        console.log('setChefReviews error', error);
    }); 
  }, [props.chefName]);

  
  return (
    <div className={classes.chefReviews}>
      <h3 className={classes.reviewText}>Reviews</h3>
      <div className={classes.customerReview}>
        <div className={classes.customerDetails}>
          <img className={classes.customerImage} src={chefreviews && chefreviews.Image} alt="Customer" />
          <h4 className={classes.customerName}>{chefreviews && chefreviews.CustName}</h4>
        </div>
        <div>
          {chefreviews && chefreviews.Comment}
        </div>
      </div>

      {/* {ChefReviews.map((review) => (
      <div className={classes.customerReview}>
        <div className={classes.customerDetails}>
          <img className={classes.customerImage} src={review && review.Image} alt="Customer" />
          <h4 className={classes.customerName}>{review && review.CustName}</h4>
        </div>
        <div>
          {review && review.Comment}
        </div>
      </div>
      ))} */}

    </div>
  );
}
