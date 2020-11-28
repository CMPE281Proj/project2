import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';

import '../style.css';

const PaymentForm = (props) => {
  const [cardName, setCardName] = React.useState(props.paymentInfo.cardName);
  const [cardNumber, setCardNumber] = React.useState(props.paymentInfo.cardNumber);
  const [expDate, setExpDate] = React.useState(props.paymentInfo.expDate);

  const handleSave = () => {
    props.onPaymentFormUpdate({cardName, cardNumber, expDate});
  }
  
  return (
    <Container maxWidth={"sm"} className="bookingFormContainer">
      <React.Fragment>
        <Typography variant='h6' gutterBottom>
          Payment method
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id='cardName'
              label='Name on card'
              fullWidth
              autoComplete='cc-name'
              value={cardName}
              onChange={(event) => setCardName(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id='cardNumber'
              label='Card number'
              fullWidth
              autoComplete='cc-number'
              value={cardNumber}
              onChange={(event) => setCardNumber(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id='expDate'
              label='Expiry date'
              fullWidth
              autoComplete='cc-exp'
              value={expDate}
              onChange={(event) => setExpDate(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              id='cvv'
              label='CVV'
              helperText='Last three digits on signature strip'
              fullWidth
              autoComplete='cc-csc'
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color='secondary' name='saveCard' value='yes' />}
              label='Remember credit card details for next time'
            />
          </Grid>
        </Grid>
        <Button
          onClick={handleSave}
          className="buttonSave"
        >
          Save
        </Button>
      </React.Fragment>
    </Container>
  );
}
export default PaymentForm;
