import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import {AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'

Amplify.configure(awsconfig)

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
        <AmplifySignOut />
          <h2>Welcome to Job Portal</h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);