import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import Container from '@material-ui/core/Container';
import awsconfig from './aws-exports'
// import {AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
import { Switch, Route,BrowserRouter as Router} from 'react-router-dom'
import HomePage from './HomePage';
import Header from './Header';
import SignIn from './SignIn';
import { FindAChef } from './FindAChef';

Amplify.configure(awsconfig)

function App () {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Container maxWidth={false}>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/signIn' exact component={SignIn} />
            <Route path='/findChef' exact component={FindAChef} />
          </Switch>
        </Container>
      </div>

    </Router>
  );
}
export default App

// export default withAuthenticator(App);