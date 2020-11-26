//Function for lex response.

exports.handler = async (event, context, callback) => {
  console.log(event.currentIntent);
  console.log(context);

  let { cuisine: cuisine } = event.currentIntent.slots;
  let { chef: chefName } = event.currentIntent.slots;
  let { reserveDate: rsDate } = event.currentIntent.slots;
  let { bookingSlot: bkslot } = event.currentIntent.slots;

  callback(null, close({
    contentType: "PlainText",
    content: `Your reservation for ${chefName} on ${rsDate}, ${bkslot} is confirmed !!`
  }))
};

const getResponseCard = (title, subtitle) => {
  var buttons = [];
  buttons.push({
    'text': 'Yes',
    'value': 'Need Chef'
  });
  buttons.push({
    'text': 'No, Thanks',
    'value': 'no'
  });
  return {
    'contentType': 'application/vnd.amazonaws.card.generic',
    'version': 4,
    'genericAttachments': [{
      'title': 'Anything else ?',
      'subTitle': 'Would you like to make another reservation ?',
      'buttons': buttons
    }]
  }
}
const close = (message) => {
  return {
    dialogAction: {
      type: 'Close',
      fulfillmentState: 'Fulfilled',
      message,
      'responseCard': getResponseCard()
    },

  }
}
