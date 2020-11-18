import React from 'react'

import Amplify from 'aws-amplify'
import awsconfig from '../aws-exports'
import {withAuthenticator } from '@aws-amplify/ui-react'

Amplify.configure(awsconfig)

const SignIn = () => {
  return (
    <div />
  )
}

export default withAuthenticator(SignIn, true);
