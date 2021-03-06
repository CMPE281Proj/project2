import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditBooking from './EditBooking'
import ConfirmBooking from './ReviewBooking';
import PaymentForm from './PaymentForm';

const useStyles = makeStyles((theme) => ({
  bookChef: {
    width: '100%'
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));


const BookChef = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [bookingInfo, setBookingInfo] = React.useState({});
  const [paymentInfo, setPaymentInfo] = React.useState({});

  const steps = getSteps();


  function getSteps() {
    return ['Edit Booking', 'Payment', 'Confirm Booking'];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <EditBooking onEditBooking={(bookingInfo) => setBookingInfo(bookingInfo)} paymentInfo={paymentInfo} bookingInfo={bookingInfo} />;
      case 1:
        return <PaymentForm onPaymentFormUpdate={(paymentInfo) => setPaymentInfo(paymentInfo)} bookingInfo={bookingInfo} paymentInfo={paymentInfo} />;
      default:
        return <ConfirmBooking bookingInfo={bookingInfo} paymentInfo={paymentInfo} />;
    }
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.bookChef}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ?
          (
            <div>
              <Typography className={classes.instructions}>
                Booking is Confirmed!
                </Typography>

              <Button onClick={handleReset} className={classes.button}>
                Reset
                </Button>
            </div>
          )
          : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                {activeStep !== steps.length - 1 ? <Button
                  variant='contained'
                  color='primary'
                  onClick={handleNext}
                  className={classes.button}
                >
                  Next
                </Button> : null}
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
export default BookChef;
