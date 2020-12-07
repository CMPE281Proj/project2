import React, { useRef, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { withStyles } from '@material-ui/core/styles';

import '../style.css';

// const Accordion = withStyles({
//   root: {
//     border: '1px solid rgba(0, 0, 0, .125)',
//     boxShadow: 'none',
//     '&:not(:last-child)': {
//       borderBottom: 0,
//     },
//     '&:before': {
//       display: 'none',
//     },
//     '&$expanded': {
//       margin: 'auto',
//     },
//   },
//   expanded: {},
// })(MuiAccordion);

// const AccordionSummary = withStyles({
//   root: {
//     backgroundColor: 'rgba(0, 0, 0, .26)',
//     borderBottom: '1px solid rgba(0, 0, 0, .125)',
//     marginBottom: -1,
//     minHeight: 56,
//     '&$expanded': {
//       minHeight: 56,
//     },
//   },
//   content: {
//     '&$expanded': {
//       margin: '12px 0',
//     },
//   },
//   expanded: {},
// })(MuiAccordionSummary);

// const AccordionDetails = withStyles((theme) => ({
//   root: {
//     padding: theme.spacing(2),
//   },
// }))(MuiAccordionDetails);



const PaymentForm = (props) => {
  const [cardName, setCardName] = React.useState(props.paymentInfo.cardName);
  const [cardNumber, setCardNumber] = React.useState(props.paymentInfo.cardNumber);
  const [expDate, setExpDate] = React.useState(props.paymentInfo.expDate);
  // const [expanded, setExpanded] = React.useState('panel1');
  // const [usePP, setUsePP] = React.useState(false);
  const paypal = useRef();

  const handleSave = () => {
    props.onPaymentFormUpdate({ cardName, cardNumber, expDate });
  }

  // const handleChange = (panel) => (event, newExpanded) => {
  //   setExpanded(newExpanded ? panel : false);
  // };

  useEffect(() => {
    window.paypal.Buttons({
      createOrder: (data, actions, err) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [{
            description: "FindMyChefReservation",
            amount: {
              currency_code: "USD",
              value: 1.00 //update with the chef price
            }
          }]

        })
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture()
        console.log(order)
      },
      onError: (err) => {
        console.log(err)
      }
    }).render(paypal.current)
    return () => {

    }
  }, [])

  return (
    <Container maxWidth={"sm"} className="bookingContainer">
      {/* <React.Fragment>
        <Typography variant='h6' gutterBottom>
          Payment method
        </Typography>

        <div>
          <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>Credit/Debit Card</Typography>
            </AccordionSummary>
            <AccordionDetails>
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
                    onBlur={handleSave}
                  />
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography>PayPal</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox color='secondary' name='PayPal' />}
                    label='Use PayPal'
                  />
                </Grid>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <br /> */}
      <Grid item xs={12}>
        {/* <PayPal /> */}
        {/* <FormControlLabel
              control={<Checkbox color='secondary' name='saveCard' value='yes' />}
              label='Remember credit card details for next time'
            /> */}
        <div ref={paypal}></div>
      </Grid>

      {/* </React.Fragment> */}
    </Container>
  );
}
export default PaymentForm;
