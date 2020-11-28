import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

const addresses = [
  '1 Material-UI Drive',
  'Reactville',
  'Anytown',
  '99999',
  'USA'
];

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

const ReviewBooking = (props) => {
  const classes = useStyles();
  const bookingInfo = props.bookingInfo;
  const paymentInfo = props.paymentInfo;
  return (
    <Container maxWidth={"sm"} className="bookingContainer">
      <React.Fragment>
        <Typography variant='h6' gutterBottom>
          Booking summary
        </Typography>
        <List disablePadding>
          <ListItem className={classes.listItem}>
            <ListItemText primary={bookingInfo.chefName}/>
            <Typography variant='body2'>{bookingInfo.hours}Hrs</Typography>
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemText primary='Total' />
            <Typography variant='subtitle1' className={classes.total}>
              ${bookingInfo.price*bookingInfo.hours}
            </Typography>
          </ListItem>
        </List>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant='h6' gutterBottom className={classes.title}>
              Shipping
            </Typography>
            <Typography gutterBottom>John Smith</Typography>
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
    </Container>
  );
}
export default ReviewBooking;
