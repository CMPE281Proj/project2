import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
// import {AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
import { Switch, Route,BrowserRouter as Router} from "react-router-dom"
import HomePage from './Components/HomePage'

import Header from './Header';
import SignIn from './Components/SignIn';

Amplify.configure(awsconfig)

function App() {
  return (
    <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signIn" exact component={SignIn} />
        </Switch>
    
    </Router>
  );
}
export default App

// export default withAuthenticator(App);