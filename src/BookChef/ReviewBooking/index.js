import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';

import PutCustomerBookings from './PutCustomerBookings';
import UpdateChefTableSlot from './UpdateChefTableSlot';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0)
  },
  total: {
    fontWeight: 700
  },
  title: {
    marginTop: theme.spacing(2)
  }
}));

const Alert = (props) => {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const ReviewBooking = (props) => {
  const classes = useStyles();
  const [disableButton, setDisableButton] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [confirmMessage, setConfirmMessage] = React.useState('');

  const history = useHistory();
  const userDetails = JSON.parse(sessionStorage.getItem('userDetails'));
  const bookingInfo = props.bookingInfo;
  const paymentInfo = props.paymentInfo;
  const totalPrice = bookingInfo ? bookingInfo.price * bookingInfo.hours : 0;
  const addresses = [
    'North Park Village',
    'San Jose',
    'CA',
    '95134',
    'USA'
  ];

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);

    const path = '/custProfile';

    history.push({
      pathname: path
    })
  };

  const submitBookingInfo = (totalPrice) => {
    const customerBookings = {}
    const bookingID = new Date().getTime();
    setDisableButton(true);
    console.log(userDetails);

    customerBookings.bookingID = bookingID;
    customerBookings.chefName = bookingInfo.chefName;
    customerBookings.custName = bookingInfo.custName;
    customerBookings.chefEmail = bookingInfo.chefEmail;
    customerBookings.selectedDate = bookingInfo.selectedDate;
    customerBookings.hours = bookingInfo.hours;
    customerBookings.slot = [bookingInfo.slot];
    customerBookings.totalPrice = totalPrice;
    customerBookings.custEmail = userDetails.userEmailId;
    PutCustomerBookings(customerBookings).then(function (response) {
      console.log('PutCustomerBookings', response);
      UpdateChefTableSlot({ email: bookingInfo.chefEmail, updatedChefSlots: bookingInfo.updatedChefSlots }).then(function (response) {
        console.log('UpdateChefTableSlot', response);
        // alert("Your Booking Number " + bookingID + " is Confirmed!");
        setConfirmMessage("Your Reservation for" + customerBookings.chefName + "has been confirmed, Booking Number: " + bookingID);
        setOpen(true);

      })
        .catch(function (error) {
          console.log('UpdateChefTableSlot error', error);
          setDisableButton(false);
        });
    })
      .catch(function (error) {
        console.log('PutCustomerBookings error', error);
        setDisableButton(true);
      });

  }
  return (
    <Container maxWidth={"sm"} className="bookingContainer">
      <React.Fragment>
        <Snackbar open={open} autoHideDuration={60000} onClose={handleClose}>
          <Alert onClose={handleClose} severity='success'>
            {confirmMessage}
          </Alert>
        </Snackbar>
        <Typography variant='h6' gutterBottom>
          Booking summary
        </Typography>
        <List disablePadding>
          <ListItem className={classes.listItem}>
            <ListItemText primary={bookingInfo.chefName} />
            <Typography variant='body2'>{bookingInfo.hours}Hrs</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Total' />
            <Typography variant='subtitle1' className={classes.total}>
              ${bookingInfo.price * bookingInfo.hours}
            </Typography>
          </ListItem>
        </List>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant='h6' gutterBottom className={classes.title}>
              Shipping Address
            </Typography>
            <Typography gutterBottom>{bookingInfo.custName}</Typography>
            <Typography gutterBottom>{addresses.join(', ')}</Typography>
          </Grid>
          <Grid item container direction='column' xs={12} sm={6}>
            <Typography variant='h6' gutterBottom className={classes.title}>
              Payment details
            </Typography>
            <Grid container>
              <React.Fragment>
                <Grid item xs={6}>
                  <Typography gutterBottom>Card holder</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{paymentInfo.cardName}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Card number</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{paymentInfo.cardNumber}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Expiry date</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{paymentInfo.expDate}</Typography>
                </Grid>
              </React.Fragment>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
      <Button
        disabled={disableButton}
        onClick={() => submitBookingInfo(totalPrice)}
        className="buttonSave"
      >
        Submit
      </Button>
    </Container>
  );
}
export default ReviewBooking;
