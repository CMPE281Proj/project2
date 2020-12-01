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
            <Route path='/' exact component={HomePage} />
            <Route path='/signIn' exact component={() => <SignIn onIsLoggedIn={onIsLoggedIn} />} />
            <Route path='/findChef' exact component={FindAChef} />
            <Route path='/bookChef' exact component={BookChef} />
            <Route path='/chefProfile/:chefId' exact component={ChefDetails} />
            <Route path='/bookingHistory' exact component={BookingHistory} />
            <Route path='/bookingHistory/:custName' exact component={BookingHistory} />
            <Route path='/signUp' exact component={SignUp} />
            {/* <Route path='/confirmSignUp' exact component={ConfirmSignUp} /> */}
            <Route path='/confirmSignUp/:email' exact component={ConfirmSignUp} />
            <Route path='/lexbot' exact component={Lexbot} />
            <Route path='/custProfile' exact component={CustomerProfile} />
          </Switch>
        </Container>
      </div>

    </Router>
  );
}
export default App

// export default withAuthenticator(App);