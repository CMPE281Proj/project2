import React from 'react';
import Amplify, { Interactions } from 'aws-amplify';
import { ChatBot } from 'aws-amplify-react';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);
Amplify.configure({
  Interactions: {
    bots: {
      'BookChef': {
        'name': 'BookChef',
        'alias': 'firstRelease',
        'region': 'us-east-1',
      }
    }
  }
});

const Lexbot = () => {
  const handleComplete = (err, confirmation) => {
    if (err) {
      console.log('Bot conversation failed')
      return;
    }
    console.log('Success: ' + JSON.stringify(confirmation, null, 2));
    // return '';'Reservation confirmed. Thank you!';
    return;
  }

  return (
    <div>
      <p>test</p>
      <ChatBot
        title='Find My Chef'
        botName='BookChef'
        welcomeMessage='Hi !!'
        onComplete={handleComplete}
        // clearOnComplete='true'
        conversationModeOn='true'
      />
    </div>
  )
}
export default Lexbot;
