var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1",
});

// https://04eemp9x86.execute-api.us-east-1.amazonaws.com/dev/updatecustomerbookingsratingreview"
exports.handler = (event, context, callback) => {
  var docClient = new AWS.DynamoDB.DocumentClient();
  
  console.log('event---', event);
  var params = {
      TableName:"CustomerBookings",
      Key:{
        'BookingId' : event.id
      },
      
      UpdateExpression: 'SET #Comments = :Comments, #Rating = :Rating',
      ExpressionAttributeNames: {
          '#Comments'   : 'Comments',
          '#Rating' : 'Rating'
      },
      ExpressionAttributeValues: {
        ':Comments' : event.review,
        ':Rating' : event.rating,
      }
  };
  

  docClient.update(params, function(err, data) {
      if (err) {
          console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
          callback(err, null);
      } else {
          console.log("Added item:", JSON.stringify(data, null, 2));
          callback(null, JSON.stringify(data));
      }
  });
};
