//https://5rq1hmmfdd.execute-api.us-east-1.amazonaws.com/dev
var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-east-1"
});

exports.handler = (event, context, callback) => {
  var docClient = new AWS.DynamoDB.DocumentClient();
     
    var params = {
            TableName:"ChefTable",
            Key: {
                Email : event.email
            },
            UpdateExpression: "set ChefSlots = :ChefSlots",
            ExpressionAttributeValues:{
                ":ChefSlots": event.updatedChefSlots
            },
            ReturnValues:"UPDATED_NEW"
        };
     
    docClient.update(params,callback);
};
