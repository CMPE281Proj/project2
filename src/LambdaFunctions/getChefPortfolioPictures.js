// Invoke url :  https://3arwhs3sja.execute-api.us-east-1.amazonaws.com/getChefPortfolioPictures
var AWS = require('aws-sdk');
var s3 = new AWS.S3();

exports.handler = (event, context, callback) => {
  const userprefix = 'ChefPictures/chefPortfolioPictures/' + event.Email;
  const s3Objects = s3.listObjectsV2({
    Bucket: 'findmychefs',
    Prefix: userprefix
  }).promise();
  return s3Objects;
};