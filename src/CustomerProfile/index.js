import React, { useEffect } from 'react'
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useStyles } from '../ChefDetails/ChefProfile/style';
import BookingHistory from '../BookingHistory';

import GetCustomerDetails from '../BookChef/EditBooking/GetCustomerDetails';

import './style.css';

const CustomerProfile = () => {

  const [custDetails, setCustDetails] = React.useState({});
  
  useEffect(() => {    
    var userDetails = JSON.parse(sessionStorage.getItem("userDetails"));

    GetCustomerDetails(userDetails.userEmailId).then(function (response) {
      setCustDetails(response);
    })
    .catch(function (error) {
        console.log('GetCustomerDetails error', error);
        setCustDetails({});
    }); 
  }, []);
  const classes = useStyles();
  return (
    // <Container maxWidth="md">
    //   <Grid container spacing={5}>
    //     <Grid item xs={12} sm={4}>
    //       <img src={custDetails && custDetails.Image} alt="Customer" className="customerImage" />
    //     </Grid>
    //     <Grid item xs={12} sm={8}>
    //       <h2 className="customerName">{custDetails && custDetails.Name}</h2>
    //       <h3 className="customerEmail">{custDetails && custDetails.Email}</h3>
    //       <div className="customerAddress">{custDetails && custDetails.PhoneNumber}</div>
    //       <span className="customerPhone">{custDetails && custDetails.Address}</span>
    //     </Grid>
    //   </Grid>
    // </Container>
    <Container maxWidth="lg">
      <Grid container spacing={2} className={classes.chefDetails}>
        <Grid item xs={12} sm={4}>
          <img
            src={custDetails ? custDetails.Image : ''}
            alt="Chef Profile"
            height="180"
            width="180"
            className={classes.chefProfilePicture}
          />
        </Grid>
        <Grid item xs={12} sm={8} className={classes.chefProfileInfo}>
          <div className="custDetails">
            <h1>{custDetails ? custDetails.Name : ''}</h1>
            <h3 className={classes.chefProfileAddress}>{custDetails ? custDetails.Address : ''}</h3>

            <span className="custEmail">{custDetails ? custDetails.Email : ''}</span>
            <span className="custContact">Contact: {custDetails.PhoneNumber}</span>
          </div>
        </Grid>
      </Grid>
      <BookingHistory custName={custDetails.Name}/>
    </Container>
  );
}

export default CustomerProfile;
