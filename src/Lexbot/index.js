'use strict';

const dispatch = require('./dispatch');

exports.handler = async (event, context, callback) => {
    try { 
        console.log('event--------', event);
        await dispatch(event, (response) => callback(null,response));
    }catch(err){
        callback(err);
    }
    
}


// //Function for lex response.

// const lexResponse = require('./lexResponse');
// exports.handler = async (event, context, callback) => {
//     console.log('event-----', event);
//     console.log(event.currentIntent);
//     console.log(context);
//     // if (event.currentIntent.name == 'GreetUser') {
//     //     return 
//     // }
//     // const cuisine = event.currentIntent.slots.cuisine;
//     // const chefName = event.currentIntent.slots.chef;
//     // const rsDate = event.currentIntent.slots.reserveDate;
//     // const bkSlot = event.currentIntent.slots.bookingSlot;
    
//     callback(null, close ({
//         contentType: "PlainText",
//         content: `Your reservation for ${chefName} on ${rsDate}, ${bkSlot} is confirmed !!`
//     }))
// };

// const getResponseCard = (title,subtitle) => {
//   var buttons = [];
//   buttons.push({
//     'text': 'Yes',
//     'value' : 'Need Chef'
//   });
//   buttons.push({
//     'text': 'No, Thanks',
//     'value' : 'No'
//   });
//   return {
//       'contentType': 'application/vnd.amazonaws.card.generic',
//       'version': 5,
//       'genericAttachments': [{
//           'title': 'Anything else ?',
//           'subTitle': 'Would you like to make another reservation ?',
//           'buttons': buttons 
//       }]
//   }
// }
//     const getFollowUpPrompt = ()=> {
//         return { 
//             "prompt": {
//                 "messages": [
//                   {
//                     "groupNumber": 1,
//                     "contentType": "PlainText",
//                     "content": "Your reservation has been confirmed !"
//                   },
//                   {
//                     "groupNumber": 1,
//                     "contentType": "PlainText",
//                     "content": "Have a happy meal"
//                   }
//                 ],
//                 "responseCard": "{\"version\":1,\"contentType\":\"application/vnd.amazonaws.card.generic\",\"genericAttachments\":[{\"subTitle\":\"Would you like to make another reservation ?\",\"title\":\"Anything else ?\",\"buttons\":[{\"text\":\"Yes\",\"value\":\"Need chef \"},{\"text\":\"No, Thanks\",\"value\":\"no\"}]}]}",
//                 "maxAttempts": 3
//               }
//         }
//     }
    
// const close = (message) => {
//     return {
//         dialogAction: {
//             type: 'Close',
//             fulfillmentState: 'Fulfilled',
//             'responseCard' : getResponseCard(),
//             'followUpPrompt' : getFollowUpPrompt()
            
//         },
//     }
// }
