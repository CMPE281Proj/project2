import logo from './logo.svg';
import './App.css';
import Amplify, { container } from 'aws-amplify'
import awsconfig from './aws-exports'
// import {AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
import { Switch, Route,BrowserRouter as Router} from 'react-router-dom'
import HomePage from './HomePage';
import Header from './Header';
import SignIn from './SignIn';

Amplify.configure(awsconfig)

function App () {
  return (
    <Router>
      <div className='App'>
        <Header />
        <container>
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/signIn' exact component={SignIn} />
          </Switch>
        </container>
      </div>

    </Router>
  );
}
export default App

// export default withAuthenticator(App);