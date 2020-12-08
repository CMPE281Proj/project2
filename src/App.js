import React from 'react';
import './App.css';
import Amplify from 'aws-amplify';
import Container from '@material-ui/core/Container';
import awsconfig from './aws-exports'
// import {AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './HomePage';
import Header from './Header';
import SignIn from './SignIn';
import { FindAChef } from './FindAChef';
import BookChef from './BookChef';
import { ChefDetails } from './ChefDetails';
import BookingHistory from './BookingHistory';
import SignUp from './SignUp';
import ConfirmSignUp from './SignUp/ConfirmSignUp';
import Lexbot from './Lexbot';
import CustomerProfile from './CustomerProfile';
import ChatPopper from './ChatPopper';
import Test from './Test';
import ApplyNow from './ApplyNow';
import ReviewBooking from './BookChef/ReviewBooking';
import ChefBookingHistory from './ChefBookingHistory';

Amplify.configure(awsconfig);

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const onIsLoggedIn = (isLoggedIn) => {
    setIsLoggedIn(isLoggedIn);
  }
  return (
    <Router>
      <div className='App'>
        <Header isLoggedIn={isLoggedIn} onIsLoggedIn={onIsLoggedIn} />
        <Container maxWidth={false}>
          <Switch>
            <Route path='/' exact component={Test} />
            <Route path='/signIn' exact component={() => <SignIn onIsLoggedIn={onIsLoggedIn} />} />
            <Route path='/findChef' exact component={FindAChef} />
            <Route path='/bookChef' exact component={BookChef} />
            <Route path='/chefProfile/:chefId' exact component={ChefDetails} />
            <Route path='/bookingHistory' exact component={BookingHistory} />
            <Route path='/signUp' exact component={SignUp} />
            {/* <Route path='/confirmSignUp' exact component={ConfirmSignUp} /> */}
            <Route path='/confirmSignUp/:email' exact component={ConfirmSignUp} />
            <Route path='/lexbot' exact component={Lexbot} />
            <Route path='/custProfile' exact component={CustomerProfile} />
            <Route path='/applyJob' exact component={ApplyNow} />
            <Route path='/reviewBooking' exact component={ReviewBooking} />
            <Route path='/chefBooking' exact component={ChefBookingHistory} />
            {/* <Route path='/test' exact component={Test} /> */}
          </Switch>
          <ChatPopper />
        </Container>
      </div>
    </Router>
  );
}
export default App

// export default withAuthenticator(App);