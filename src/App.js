import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import {AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
import { BrowserRouter as Router } from "react-router-dom";

import Header from './Header';

Amplify.configure(awsconfig)

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <img src={logo} className="App-logo" alt="logo" />
          <AmplifySignOut />
            <h2>Welcome to Job Portal</h2>
        
      </div>
    </Router>
  );
}

export default withAuthenticator(App);