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

Amplify.configure(awsconfig)

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
            <Route path='/chefProfile/bookChef/:chefId' component={BookChef} />
            <Route path='/chefProfile/:chefId' exact component={ChefDetails} />
          </Switch>
        </Container>
      </div>

    </Router>
  );
}
export default App

// export default withAuthenticator(App);