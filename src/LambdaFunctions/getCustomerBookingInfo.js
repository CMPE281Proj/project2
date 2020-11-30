// https://cgrdadmbi3.execute-api.us-east-1.amazonaws.com/dev/getcustomerbookinginfo?Name="
const AWS = require('aws-sdk');
var ddb =  new AWS.DynamoDB({apiVersion: '2012-08-10', convertEmptyValues: true});

exports.handler =  (event, context, callback) => {
    console.log('event ---', event);
     const params = {
        TableName: 'CustomerBookings',
        FilterExpression: '#custname = :custname',
        ExpressionAttributeNames: {
            '#custname' : 'CustName'
        },
        ExpressionAttributeValues: {
            ':custname' : { 'S' : event.queryStringParameters.Name}
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
