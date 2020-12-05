var AWS = require('aws-sdk');
var s3 = new AWS.S3();

exports.handler = (event, context, callback) => {
  const keyname = 'OtherPictures';
  const s3Objects = s3.listObjectsV2({
    Bucket: 'findmychefs',
    Prefix: keyname
  }).promise();
  return s3Objects;
};