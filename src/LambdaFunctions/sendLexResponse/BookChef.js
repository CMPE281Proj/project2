//Intent : Book chef 

'use strict';

var AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });

const db = require('./DBManager');
const lexResponse = require('./lexResponse');

var params = {};

// replace the following from the database column values
const cuisineTypes = ['north-indian', 'north-india', 'north indian', 'north india',
    'manipuri', 'rajastani', 'rajasthani', 'andhra', 'punjabi',
    'maharastrian', 'south indian', 'south india', 'south-India'];
const cuisines = ['north-indian', 'south-indian', 'telugu', 'manipuri', 'rajasthani', 'andhra', 'punjabi', 'maharastrian', 'south-indian'];
let chefList = ['adya', 'amithab', 'chandra', 'ganesh', 'jayasri', 'prema', 'ram', 'salman', 'sruthi', 'sushma'];
const slotTypes = ['breakfast', 'lunch', 'dinner'];

// intent request is the 'event' var received from handler -> dispatch -> Book chef
module.exports = function (intentRequest, callback) {

    const cuisine = intentRequest.currentIntent.slots.cuisine;
    const chefName = intentRequest.currentIntent.slots.chef;
    const rsDate = intentRequest.currentIntent.slots.reserveDate;
    const bkSlot = intentRequest.currentIntent.slots.bookingSlot;
    const emailid = intentRequest.currentIntent.slots.custEmail;
    const customerName = intentRequest.currentIntent.slots.custName;

    console.log('Cuisine: ' + cuisine + 'Chef name: ' + chefName + 'reserve date: ' + rsDate + 'bkSlot' + bkSlot);

    const source = intentRequest.invocationSource;
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

    if (source === 'FulfillmentCodeHook') {
        console.log('FulfillmentCodeHook called');

        const fulfillmentRes = confirmReservation(chefName, cuisine, rsDate, bkSlot, customerName, emailid);
        callback(lexResponse.close(intentRequest.sessionAttributes, fulfillmentRes.fulfillmentState, fulfillmentRes.message));
        return;
    };

}

// VALIDATE THE PROVIDED SLOT CONTENT AND RETURN AN ALTERNATIVE MESSAGE FROM BUILDVALIDATIONRES METHOD
function validateBookChef(cuisine, chefName, rsDate, bkSlot) {

    if (cuisine && cuisineTypes.indexOf(cuisine.toLowerCase()) === -1) {
        return buildValidationRes(false, 'cuisine', `Sorry, we do not have ${cuisine} cuisine, would you like to try a different one (` + cuisines.toString().toUpperCase() + `) ?`);
    }

    if (chefName) {


        if (chefList.indexOf(chefName.toLowerCase()) === -1) {
            return buildValidationRes(false, 'chef', `Sorry, Chef ${chefName} does not exist, Please select the chef from the given chef list: (` + chefList.toString().toUpperCase() + ')');
        }
    }

    // VALIDATE THE DATE 

    console.log('Date -- ', rsDate);

    // CHECK IF THE DATE IS PAST DATE AND PROVIDE VALIDATION MESSAGE  
    const isValidDate = checkDate(rsDate);
    console.log('isValid', isValidDate);
    if (rsDate && isValidDate === 'past') {
        return buildValidationRes(false, 'reserveDate', 'This seems to be PAST DATE , Please provide a valid Date !');
    }


    if (bkSlot) {

        const timeNow = new Date(Date.now()).getHours();
        console.log('Timenow ---', timeNow);


        // VALIDATION FOR THE SLOT TYPE - BREAKFAST, LUNCH, DINNER 

        if (slotTypes.indexOf(bkSlot.toLowerCase()) === -1) {
            return buildValidationRes(false, 'bookingSlot', `Please provide a valid slot ! (` + slotTypes.toString().toUpperCase`)`);
        }

        // IF THE DATE IS TODAY, CHECK FOR THE TIME AND VALIDATE THE SLOT 
        if (isValidDate === 'today') {

            console.log('isvalid date ', isValidDate);
            // BETWEEN 8AM  AND 10 AM  - CLOSED FOR BREAKFAST AND LUNCH 
            if ((timeNow >= 8 && timeNow <= 10) && bkSlot.toLowerCase() === 'breakfast') {
                return buildValidationRes((false, 'bookingSlot', 'Sorry, we are closed for Breakfast slot. Would you like to try for Lunch or Dinner ?'));
            }

            //BETWEEN 10AM  AND 1 PM  - CLOSED FOR BREAKFAST AND LUNCH 

            if ((timeNow >= 10 && timeNow <= 13) && (bkSlot.toLowerCase() === 'breakfast' || bkSlot.toLowerCase() === 'lunch')) {
                return buildValidationRes((false, 'bookingSlot', 'Sorry, we are closed for Breakfast and lunch slot for today. Would you like to try for Dinner ?'));
            }

            //AFTER 6 PM - CLOSED FOR THE DAY  

            if ((timeNow >= 18) && (slotTypes.indexOf(bkSlot.toLowerCase() >= 0))) {
                return buildValidationRes((false, 'bookingSlot', 'Sorry, we are closed for Today, would you like to try for another Date ?'));
            }
        }

    }


    return buildValidationRes(true, null, null);
}

// RETURN FALSE IF THE USER PROVIDED DATE IS A PAST DATE 

function checkDate(rsDate) {
    const selectedDate = new Date(rsDate);

    const todayDate = new Date(Date.now());
    console.log('selected date : and today date', selectedDate + ' ' + todayDate);

    // CHECK FOR TODAY DATE
    if (selectedDate.getFullYear() === todayDate.getFullYear()
        && selectedDate.getMonth() === (todayDate.getMonth())
        && selectedDate.getDate() === todayDate.getDate()) {
        return 'today';
    }

    // CHECK FOR PAST DATE 
    if (selectedDate.getFullYear() < todayDate.getFullYear()) {
        return 'past';
    }

    if ((selectedDate.getFullYear() === todayDate.getFullYear())
        && selectedDate.getMonth() < todayDate.getMonth()) {
        return 'past';
    }

    if ((selectedDate.getFullYear() === todayDate.getFullYear())
        && selectedDate.getMonth() === todayDate.getMonth()
        && selectedDate.getDate() < todayDate.getDate()) {
        return 'past';
    }
    return 'valid';
}

//return the message on invalid slot content
function buildValidationRes(isValid, violatedSlot, message) {
    if (message === null) {
        return {
            isValid,
            violatedSlot
        }
    }
    return {
        isValid,
        violatedSlot,
        message: {
            contentType: 'PlainText',
            content: message
        },
    };
}

// FULFILL THE RESERVATION
function confirmReservation(chefName, cuisine, reserveDate, bookingSlot, customerName, emailid) {

    console.log('Order confirmation in progress ...');
    const item = db.saveBookingHistory(chefName, cuisine, reserveDate, bookingSlot, customerName, emailid);

    console.log(`reservation confirmed: ${JSON.stringify(item)}`);

    return buildFulfillment('Fulfilled', `Thank you ! Your reservation for ${chefName} on ${reserveDate} for ${bookingSlot} is confirmed ! 
    Please complete the payment once the service is done! 
    Do Check your email for reservation confirmation !
    Enjoy Home Food !!` );

}


function buildFulfillment(fulfillmentState, message) {
    return {
        fulfillmentState,
        message: {
            contentType: 'PlainText',
            content: message
        }
    }
}