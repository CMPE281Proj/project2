// Invoke url : https://7w0xdfcdpl.execute-api.us-east-1.amazonaws.com/getDefaultChefData
var AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });

exports.handler = (event, context, callback) => {
  console.log('event---', event);
  var ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

  var params = {
    TableName: 'ChefTable'
  };

  ddb.scan(params, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data.Items);
    }
  });
};
