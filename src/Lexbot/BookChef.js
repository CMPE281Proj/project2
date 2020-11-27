//Intent : Book chef 

'use strict';

const lexResponse = require('./lexResponse');

// replace the following from the database column values
const cuisineTypes = ['north-india', 'telugu', 'maharastrian', 'south-India'];
const chefList = ['natasha', 'Test'];
const slotTypes = ['breakfast', 'lunch', 'dinner']; 

// intent request is the event var received from handler -> dispatch -> Book chef
module.exports = function(intentRequest, callback) {
    
    const cuisine = intentRequest.currentIntent.slots.cuisine;
    const chefName = intentRequest.currentIntent.slots.chef;
    const rsDate = intentRequest.currentIntent.slots.reserveDate;
    const bkSlot = intentRequest.currentIntent.slots.bookingSlot; 
    
    console.log('Cuisine: ' + cuisine + 'Chef name: '+ chefName + 'reserve date: ' + rsDate + 'bkSlot' + bkSlot);
    
    const source=intentRequest.invocationSource;
    if (source === 'DialogCodeHook') { 
        
        // validations 
        const slots = intentRequest.currentIntent.slots;
        const validationRes = validateBookChef(cuisine, chefName, rsDate, bkSlot);
        if (!validationRes.isValid) { 
            slots[`${validationRes.violatedSlot}`] = null;
            
            console.log(validationRes);
            callback(lexResponse.elicitSlot(intentRequest.sessionAttributes, intentRequest.currentIntent.name, slots, validationRes.violatedSlot, validationRes.message));
            return;
        }
        callback(lexResponse.delegate(intentRequest.sessionAttributes, intentRequest.currentIntent.slots));
        return;
    }
}

// Validate the provided slot content and return an alternative message from buildValidationRes method
function validateBookChef(cuisine, chefName, rsDate, bkSlot) {
    if (cuisine && cuisineTypes.indexOf(cuisine.toLowerCase()) === -1) {
        return buildValidationRes(false, 'cuisine', `Sorry, we do not have ${cuisine} cuisine, would you like to try a different one (` + cuisineTypes.toString().toUpperCase() + `) ?`);
    }
    
    if (chefName && chefList.indexOf(chefName.toLowerCase()) === -1){
        return buildValidationRes(false, 'chefName', `Sorry, ${chefName} does not exist, Please select the chef from the given chef list: (` + chefList.toString().toUpperCase() + ')');
    }
    
    console.log('Date -- ', rsDate);
    
    if (bkSlot && slotTypes.indexOf(bkSlot.toLowerCase()) === -1){
        return buildValidationRes(false, 'bookingSlot', `Please provide a valid slot ! (` + slotTypes.toString().toUpperCase `)`);
    }
    
    return buildValidationRes(true,null,null);
}

//return the message on invalid slot content
function buildValidationRes(isValid, violatedSlot, message){
    if (message === null){
        return {
            isValid,
            violatedSlot
        }
    }
    return {
        isValid,
        violatedSlot,
        message : {contentType: 'PlainText', content : message},
    };
}