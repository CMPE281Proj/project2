'use strict';

const bookChef = require('./BookChef');
const greetUser = require('./GreetUser');

// intent request is the event received from the handler method 
module.exports = function (intentRequest, callback) {
    console.log(`dispatch userid = ${intentRequest.userid}, intentName=${intentRequest.currentIntent.name}`);
    const intentName = intentRequest.currentIntent.name;
    
    if (intentName === 'BookChef') { 
        console.log('called intent :' + intentName);
        return bookChef(intentRequest, callback);
    }
    if (intentName === 'GreetUser') { 
        console.log('Called intent: ' + intentName);
        return greetUser(intentRequest, callback);
    }
    
    throw new Error('No such intent exists'); 
}
