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

Amplify.configure(awsconfig);

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Container maxWidth={false}>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/signIn' exact component={SignIn} />
            <Route path='/findChef' exact component={FindAChef} />
            <Route path='/bookChef' exact component={BookChef} />
            <Route path='/chefProfile/:chefId' exact component={ChefDetails} />
            <Route path='/bookingHistory' exact component={BookingHistory} />
            <Route path='/signUp' exact component={SignUp} />
            {/* <Route path='/confirmSignUp' exact component={ConfirmSignUp} /> */}
            <Route path='/confirmSignUp/:email' exact component={ConfirmSignUp} />
            <Route path='/lexbot' exact component={Lexbot} />
          </Switch>
        </Container>
      </div>

    </Router>
  );
}
export default App

// export default withAuthenticator(App);