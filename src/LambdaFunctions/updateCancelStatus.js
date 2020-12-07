var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
});

exports.handler = (event, context, callback) => {
  var docClient = new AWS.DynamoDB.DocumentClient();

  console.log('event---', event);
  var params = {
    TableName: "CustomerBookings",
    Key: {
      'BookingId': event.id
    },

    UpdateExpression: 'SET #OrderStatus = :OrderStatus',
    ExpressionAttributeNames: {
      '#OrderStatus': 'OrderStatus'
    },
    ExpressionAttributeValues: {
      ':OrderStatus': 'Cancelled'
    }
  };


  docClient.update(params, function (err, data) {
    if (err) {
      console.error("Unable to cancel the reservation. Error JSON:", JSON.stringify(err, null, 2));
      callback(err, null);
    } else {
      console.log("Cancelled reservation:", JSON.stringify(data, null, 2));
      callback(null, JSON.stringify(data));
    }
  });
};
