//https://3pb760bj4c.execute-api.us-east-1.amazonaws.com/dev/getchefreviews?Name=Prema
const AWS = require('aws-sdk');
var ddb =  new AWS.DynamoDB({apiVersion: '2012-08-10', convertEmptyValues: true});

exports.handler =  (event, context, callback) => {
    console.log('event ---', event);
     const params = {
        TableName: 'CustomerBookings',
        FilterExpression: '#ChefName = :ChefName',
        ExpressionAttributeNames: {
            '#ChefName' : 'ChefName'
        },
        ExpressionAttributeValues: {
            ':ChefName' : { 'S' : event.queryStringParameters.Name}
        }
    };
    
  ddb.scan(params, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data.Items);
    }
  });
};