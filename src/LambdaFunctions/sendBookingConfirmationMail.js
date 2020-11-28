var aws = require('aws-sdk');
var ses = new aws.SES({ region: 'us-east-1' });

exports.handler = async (event) => {

  const msgData = 'Your FindMyChef booking#' + event.queryStringParameters.refNum + ' has been confirmed !!';
  var params = {
    Destination: {
      ToAddresses: [event.queryStringParameters.DestEmail],
    },
    Message: {
      Body: {
        Text: { Data: 'Test Booking confirmation Email !!' },
      },

      Subject: { Data: msgData },
    },
    Source: event.queryStringParameters.SrcEmail,
  };

  return ses.sendEmail(params).promise();
};
