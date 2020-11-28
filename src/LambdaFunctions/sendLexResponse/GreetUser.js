'use strict';

const lexResponse = require('./lexResponse');

module.exports = function(intentRequest, callback) {
    
    const source=intentRequest.invocationSource;
    
    if (source === 'DialogCodeHook') { 
        
        const username = intentRequest.currentIntent.slots.username;
        console.log('Greet user :' + username);
        
        callback(lexResponse.delegate(intentRequest.sessionAttributes, intentRequest.currentIntent.slots));
        return;
        
    }  
}